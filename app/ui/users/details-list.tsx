import { User } from "@/lib/definitions";
import { TmButton } from "../common/tm-button";

export function UserDetailsList({ users }: { users: User[] }) {
    return (<dl className=" flex flex-col gap-2 justify-center text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {
            users.map(({ email, name }) => (
                <div key={email} className="card flex flex-col p-4 w-full">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex justify-between" >{name} <div className="flex gap-2"><TmButton label="Edit" /> <TmButton label="Delete" secondary/></div></dt>
                    <dd className="text-lg font-semibold">{email}</dd>
                </div>
            ))
        }
    </dl>)
}