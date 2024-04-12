"use client"

import { Navbar } from "flowbite-react";
import Image from 'next/image';

const translations = {
    pageTitle: "Manage users",
    userList: "User list"
}

export default function UsersSettings() {

    return (
        <div className="flex flex-col p-4">
            <h2>{translations.pageTitle}</h2>

            <p>{translations.userList}</p>


            <dl className=" flex flex-col justify-center max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <div className="card flex flex-col p-4">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
                    <dd className="text-lg font-semibold">yourname@flowbite.com</dd>
                </div>
            </dl>


        </div>
    )
}