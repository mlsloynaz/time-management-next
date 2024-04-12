import { sql } from '@vercel/postgres';
import { User } from './definitions';

export async function fetchUsersSql(){
    try{
        const queryResponse = await sql<User>`SELECT * FROM users`;
        return queryResponse.rows;
    }
    catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
} 