import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try{
    return  NextResponse.json({ status: 'success', data:'hello'})
  }
  catch(error){
    return NextResponse.json({ status: 'error', data: error });
  }
}

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers