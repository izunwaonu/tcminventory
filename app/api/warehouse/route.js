import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        
        const {title, location, type, description} = await request.json();
    
        const warehouse = await db.warehouse.create({ 
            data:{title, location, warehouseType:type, description}
        }) 
        console.log(warehouse);
    return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to create warehouse"
        },{
            status: 500
        });
    }
}

export async function GET(request){
    try {
        const warehouse = await db.warehouse.findMany({
            orderBy: {
                createdAt: 'desc', // 'asc' for ascending, 'desc' for descending it will give us the latest warehouse. 
            },
        });
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch warehouse"
        },{
            status: 500
        });
    }
}
export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id");

        const deletedWarehouse = await db.warehouse.delete({
            where: {
               id
            },
            include:{
                item: true
            }
        })
        
        return NextResponse.json(deletedWarehouse)
        
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to delete Warehouse"
        },{
            status: 500
        });
    }
}