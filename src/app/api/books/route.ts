import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import  Books  from '../../database/schema'; 
import { NextRequest, NextResponse } from 'next/server';
import {db} from '../../database/db';
 
 
export async function GET(){
    const allbooks= await db.select().from(Books)
    return NextResponse.json(allbooks)

}
export async function POST(request:NextRequest){
    const body= await request.json();
    if(body.id && body.title && body.author){
        const data= await db.insert(Books).values({
            id:body.id,
            title:body.title,
            author:body.author
        
        })
        return NextResponse.json({
            message:"Data edited"
        })
    }
    

}