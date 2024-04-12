import { fetchUsersSql } from "../../../lib/sql-query-data";

const translations = {
    pageTitle: "Manage users",
    userList: "User list"
}

export default async function UsersSettings() {
    const users = await fetchUsersSql();
    return (
        <div className="flex flex-col p-4">
            <h2>{translations.pageTitle}</h2>

            {users.length === 0 &&
                <p>There are no users created yet</p>
            }

            {users.length > 0 &&
                (
                    <>
                        <p>{translations.userList}</p>

                        <dl className=" flex flex-col justify-center max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            {
                                users.map(({ email, name }) => (
                                    <div key={email} className="card flex flex-col p-4">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{name}</dt>
                                        <dd className="text-lg font-semibold">{email}</dd>
                                    </div>
                                ))
                            }
                        </dl>
                    </>
                )
            }
        </div>
    )
}