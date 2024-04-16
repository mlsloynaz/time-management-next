import { PageTitle } from "@/ui/common/pageTitle";
import { UserList } from "@/ui/users/list";

const translations = {
    pageTitle: "Manage users",
    userList: "User list",
    createUser: "Create User"
}

export default async function UsersSettings() {

    return (
        <div className="flex flex-col">
            <PageTitle title="Users settings" />
            <div className="flex-1 flex  flex-col p-5 md:px-24">
               <UserList />
            </div>
        </div>
    )
}
