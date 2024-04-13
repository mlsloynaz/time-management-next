import { sql } from '@vercel/postgres';
import { User } from '../definitions';
import { unstable_noStore as noStore } from 'next/cache';

import bcrypt from "bcrypt";
import { fromString } from 'uuidv4';

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

export async function postUserSql(user: User){
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const idGenerated = await fromString(user.email + user.name);
        const insertQuery = `INSERT INTO users (id, name, email, password)
            VALUES (${idGenerated}, ${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
        `;
        // Log the SQL query
        console.log('SQL Query:', insertQuery);
        const queryResponse = await sql`${insertQuery}`;
        return queryResponse.rowCount;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to create a user.');
    }
}


export async function updateUserSql(user: User){
    // the only ones that are cached by default are the GET , and when are not using the request object , ot cookies and header APIs
    try{

       const updateQuery =   `UPDATE users
       SET name = ${user.name}, email = ${user.email}
       WHERE ${user.id}= users.Id;
     `
       const queryResponse = await sql<User>`${updateQuery}`;
       return queryResponse.rows;
       
    }
    catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to update a user.');
    }
} 

export async function deleteUserSql(id: string){
   
     try{
         const queryResponse = await sql<User>`DELETE FROM users WHERE users.Id=${id}`;
         return queryResponse.rows;
     }
     catch(error){
         console.error('Database Error:', error);
         throw new Error('Failed to fetch users data.');
     }
} 
