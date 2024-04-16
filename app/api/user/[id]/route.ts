import { NextRequest, NextResponse } from "next/server";
import { fetchUserSql } from "../../../lib/data/sql-user-data";


type Params = { params: { [key: string]: string } }


export async function GET(req:NextRequest, {params}:Params) {

  try{
    const id = params.id;
    const user = await fetchUserSql(id as string);

    return  NextResponse.json({ data: user }, {status: 200})
  }
  catch(error){
    return  NextResponse.json({ data: error }, {status: 500})
  }
}