import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        
        const {title, description} = await request.json();
        
        const category = await db.category.create({ 
            data:{title, description}
        }) 
        console.log(category);
    return NextResponse.json(category)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to create message"
        },{
            status: 500
        });
    }
}
export async function GET(request){
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: 'desc', // 'asc' for ascending, 'desc' for descending it will give us the latest warehouse. 
            },
        });
        return NextResponse.json(categories)
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

        const deleteCategory = await db.category.delete({
            where: {
               id
            },
        })
        console.log(deleteCategory);
        return NextResponse.json(deleteCategory)
        
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to delete Category"
        },{
            status: 500
        });
    }
}
