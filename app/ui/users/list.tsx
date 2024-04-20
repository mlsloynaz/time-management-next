import { fetchUsersSql } from "@/lib/data/sql-user-data";
import { UserDetailsList } from "./details-list";
import { TmButton } from "../common/tm-button";

export async function UserList() {
    const users = await fetchUsersSql();
    return (
        <>
            <div className="flex justify-between">
                <p className="text-2xl py-4">{'translations.userList'}</p>
                <TmButton label="New" />
            </div>
            {users.length === 0 && <p>There are no users created yet</p>}
            {users.length > 0 &&
                <UserDetailsList users={users} />
            }
        </>
    )
}