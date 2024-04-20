import TMModal from "@/ui/common/tm-modal";
import { LoginForm } from "@/ui/users/login-form";


export default function LoginPage() {
  return (
    <div className="fixed w-screen h-screen top-0 left-0">
      <TMModal title="Login user" isInterceptingRoute>
        <LoginForm />
      </TMModal>
    </div>
  );
}