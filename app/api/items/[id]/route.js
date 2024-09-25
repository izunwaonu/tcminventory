import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}){
    try {
       
        const item = await db.item.findUnique({
            where: {
                id
            },
            include: {
                warehouse: true,
            }
        }); 
        return NextResponse.json(item)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch item"
        },{
            status: 500
        });
    }
}

export async function PUT(request, {params: {id}}){
    try {
        const itemData = await request.json()
        const item = await db.item.update({
            where: {
                id
            },
              data: {
                    title: itemData.title,
                    categoryId: itemData.categoryId, 
                    sku: itemData.sku, 
                    barcode: itemData.barcode, 
                    quantity: parseInt(itemData.qty),  
                    unitId: itemData.unitId, 
                    brandId: itemData.brandId, 
                    supplierId: itemData.supplierId,
                    buyingPrice: parseFloat(itemData.buyingPrice),
                    sellingPrice: parseFloat(itemData.sellingPrice), 
                    reOrderPoint: parseInt(itemData.reOrderPoint), 
                    warehouseId: itemData.warehouseId, 
                    imageUrl: itemData.imageUrl, 
                    weight: parseFloat(itemData.weight), 
                    dimensions: itemData.dimensions, 
                    taxRate: parseFloat(itemData.taxRate), 
                    description: itemData.description, 
                    notes: itemData.notes
              },
        }); 
        console.log(item);
        return NextResponse.json(item)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to update the item"
        },{
            status: 500
        });
    }
}