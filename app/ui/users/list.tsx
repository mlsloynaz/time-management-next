import { fetchUsersSql } from "@/lib/data/sql-user-data";
import { UserDetailsList } from "./details-list";

export async function  UserList() {
    const users = await fetchUsersSql();

    return (
        <>
            <p className="text-2xl py-4">{'translations.userList'}</p>
            <div className="w-full" >
                {users.length === 0 &&  <p>There are no users created yet</p>}
                {users.length > 0 &&
                    <UserDetailsList users={users} />
                }
            </div>
        </>)
}