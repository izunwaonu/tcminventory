import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        
        const {transferStockQty, receivingBranchId, notes} = await request.json();
        
        const adjustment = {transferStockQty, receivingBranchId, notes};
        console.log(adjustment);
    return NextResponse.json(adjustment)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to create adjustment"
        },{
            status: 500
        });
    }
}
export async function GET(request){
    try {
        const adjustments = await db.transferStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc', // 'asc' for ascending, 'desc' for descending it will give us the latest warehouse. 
            },
        });
        return NextResponse.json(adjustments)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch adjustments"
        },{
            status: 500
        });
    }
}
export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id");

        const deletedAdjustment = await db.transferStockAdjustment.delete({
            where: {
               id
            },
        })
        
        return NextResponse.json(deletedAdjustment)
        
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to delete Adjustments"
        },{
            status: 500
        });
    }
}