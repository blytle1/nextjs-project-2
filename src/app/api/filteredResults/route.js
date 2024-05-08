import { sql } from '@vercel/postgres';
 export const dynamic = 'force-dynamic';  
import { NextRequest, NextResponse } from 'next/server'; 

 export async function POST (req, res)
    {
    //return sql `SELECT brand, model, type, score FROM assistive_technology;`;
    return NextResponse.json({brand: 'Apple', model: 'iPad', type: 'tablet', score: 5});
    console.log("POST request made to /api/filteredResults", req.body, req.tscore);
    
    }
