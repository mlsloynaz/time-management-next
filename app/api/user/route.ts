import {  fetchUsersSql } from "../../lib/data/sql-user-data"
import { NextResponse } from "next/server";

export async function GET() {
  try{
    const userList =  await fetchUsersSql();
    return  NextResponse.json({ status: 'success', data:userList})
  }
  catch(error){
    return NextResponse.json({ status: 'error', data: error });
  }
}