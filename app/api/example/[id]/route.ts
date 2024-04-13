// Methods name must be GET , POST, PATCH, DELETE


import { NextRequest, NextResponse } from "next/server";

type Params = { params: { [key: string]: string } }


export async function GET(req:NextRequest, {params}:Params) {
  // api/example/123?sort-'asc'
  try{
    const id = params.id;
    const {searchParams} = req.nextUrl;

     const sort = searchParams.get('sort')

    return  NextResponse.json({ status: 'success', data:'hello' , id, sort }, {status:200})
  }
  catch(error){
    return NextResponse.json({ status: 'error', data: error });
  }
}

// Previous version 

// export async function GET(req, res) {
//     try{
//         //api/user/[id]
//       const { id } = req.query 
//       const user=  await fetchUserSql(id as string);
//       res.status(200);
//       res.json({data:user})
//       return res;
//     }
//     catch(error){
//       return res.status(500).json({ status: 'error', data: error });
//     }
//   }


// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url)
//     const id = searchParams.get('id')
//     const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY!,
//       },
//     })
//     const product = await res.json()
   
//     return Response.json({ product })
//   }