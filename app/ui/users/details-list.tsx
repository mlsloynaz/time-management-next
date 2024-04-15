import { User } from "@/lib/definitions";

export function UserDetailsList({ users }: { users: User[] }) {
    return (<dl className=" flex flex-col justify-center text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {
            users.map(({ email, name }) => (
                <div key={email} className="card flex flex-col p-4">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{name}</dt>
                    <dd className="text-lg font-semibold">{email}</dd>
                </div>
            ))
        }
    </dl>)
}