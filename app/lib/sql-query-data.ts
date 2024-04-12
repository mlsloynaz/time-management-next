import { sql } from '@vercel/postgres';
import { User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

//TODO: Test fetching from database with mysql and  mssql, install packages and create clients. 

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
        throw new Error('Failed to fetch revenue data.');
    }
} 