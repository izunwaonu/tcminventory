import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        
        const {title, abbreviation} = await request.json();
        
        const unit = {title, abbreviation};
        console.log(unit);
    return NextResponse.json(unit)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to create a unit"
        },{
            status: 500
        });
    }
}