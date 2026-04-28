import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store/authStore";

export const RoleGuard = ({ children, alloweRole = []}) => {
    const user = useAuthStore((state) => state.isAuthenticated); 

    const hasAccess = isAuthenticated && alloweRole.includes(user?.role)
}