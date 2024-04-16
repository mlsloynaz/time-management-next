'use server';

import { sql } from "@vercel/postgres";

import { z } from "zod";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const FormSchema = z.object({
  name: z.string(),
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  password:z.string()
});

export type LoginState = {
  errors?: {
    name?: string[];
    password?: string[];
  };
  message?: string | null;
};

export  async function createUser(prevState: LoginState, formData: FormData) {
      const validatedFields = FormSchema.safeParse({
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
      })
      console.log({prevState, validatedFields});
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Invoice.',
        };
      }

      const { email, name, password } = validatedFields.data;
      
     try{
      const hashedPassword = await bcrypt.hash(password, 10);
      const idGenerated =  uuidv4();
      const insertQuery = `INSERT INTO users (id, name, email, password)
          VALUES (${idGenerated}, ${name}, ${email}, ${hashedPassword})`;

       console.log('SQL Query:', insertQuery);
       await sql`INSERT INTO users (id, name, email, password)
       VALUES (${idGenerated}, ${name}, ${email}, ${hashedPassword})`;
     } catch(error){
      console.log(error)
      return {
        message: 'Database Error: Failed to Create user.',
      };
     }
     
      revalidatePath('/settings/users');
      redirect('/settings/users');
   
}


export  async function loginUser(prevState: LoginState, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { email, name, password } = validatedFields.data;
  
 try{

 } catch(error){
  console.log(error)
  return {
    message: 'Database Error: Failed to Create user.',
  };
 }
 
  revalidatePath('/settings/users');
  redirect('/settings/users');

}