import { UserList } from "@/ui/users/list";

const translations = {
    pageTitle: "Manage users",
    userList: "User list",
    createUser: "Create User"
}

export default async function UsersSettings() {
 
    return (
        <div className="flex flex-col p-4">
            <h2 className="text-3xl pb-16 flex justify-center md:text-6xl">{translations.pageTitle}</h2>
            <div></div>
            <div className="flex flex-col md:flex-row flex-1">
                <div className="flex-col w-full md:w-[50%] justify-between pr-4">
                    <UserList/>
                </div>
            </div>
        </div>
    )
}




