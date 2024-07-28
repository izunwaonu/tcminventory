import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        
        const {title, description} = await request.json();
        
        const category = {title, description};
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