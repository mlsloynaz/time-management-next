import { sql } from '@vercel/postgres';
import { User } from '../definitions';
import { unstable_noStore as noStore } from 'next/cache';


//TODO: #10 Test fetching from database with mysql and  mssql, install packages and create clients. 

export async function fetchUsersSql(){
   // Add noStore() here to prevent the response from being cached.
   // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
    try{
        const queryResponse = await sql<User>`SELECT * FROM users`;
        return queryResponse.rows;
    }
    catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch users data.');
    }
} 

export async function fetchUserSql(id: string){
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
   noStore();
     try{
         const queryResponse = await sql<User>`SELECT * FROM users WHERE users.Id=${id}`;
         return queryResponse.rows[0];
     }
     catch(error){
         console.error('Database Error:', error);
         throw new Error('Failed to fetch users data.');
     }
} 

