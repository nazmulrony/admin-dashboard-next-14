import LoginForm from "@/components/login/loginForm";
import { authenticate } from "@/lib/actions";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <LoginForm />
        </div>
    );
}
