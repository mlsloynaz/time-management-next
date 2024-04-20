import ContentPage from "@/ui/common/contentPage";
import { UserList } from "@/ui/users/list";


export default async function UsersSettings() {

    return (
        <ContentPage title="Users settings">
            <UserList />
        </ContentPage>
    )
}
