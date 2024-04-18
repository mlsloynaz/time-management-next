"use client"

import { useFormState, useFormStatus } from "react-dom";
import { TmButton } from "../common/tm-button";
import { authenticate } from "@/lib/actions/auth";
import {ExclamationCircleIcon} from '@heroicons/react/24/outline';

export function LoginForm(){
    const [errorMessage, formAction] = useFormState(authenticate, undefined);
    const {pending } = useFormStatus()
    return (
      
        <form className="mx-auto bg-slate-50 rounded-lg  p-8 md:min-w-80 shadow-xl" action={formAction}  >
        <p className = "block mb-2 text-xl font-medium text-black dark:text-white">Login</p>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-[#E4E6F9] border border-indigo-800 text-black text-sm rounded-lg focus-ring-2 focus:ring-[#464CD4] focus-visible:ring-[#464CD4] focus:border-[#464CD4] focus-visible:border-[#464CD4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#464CD4] dark:text-white dark:focus:ring-[#464CD4] dark:focus:border-[#464CD4]" placeholder="name@domain.com" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-white">Your password</label>
            <input type="password" name="password" id="password" className="bg-[#E4E6F9] border border-indigo-800 text-black text-sm rounded-lg focus-ring-2 focus:ring-[#464CD4] focus-visible:ring-[#464CD4] focus:border-[#464CD4] focus-visible:border-[#464CD4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#464CD4] dark:text-white dark:focus:ring-[#464CD4] dark:focus:border-[#464CD4]" required />
        </div>
       
       <TmButton label="Submit" type="submit" disabled={pending}/>

       <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
    </form >
    )
}