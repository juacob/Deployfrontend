import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userId, setUserId] = useState(localStorage.getItem('userId') || null);

    function logout() {
        setToken(null)
        setUserId(null);
    }

    useEffect(() => {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
    }, [token, userId]);


    return (
        <AuthContext.Provider value={{ token, setToken, userId, setUserId, logout }}>
            {children}
        </AuthContext.Provider>

    );
}
export default AuthProvider;