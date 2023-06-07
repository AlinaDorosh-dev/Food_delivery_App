import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function useAuth() {
    const { token, setToken } = useContext(AuthContext);
    return { token, setToken };
    }