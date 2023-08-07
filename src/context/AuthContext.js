import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: 'admin',
        password: 'admin123'
    })
    const [isLogin, setIsLogin] = useState(false)
    const [error, setIsError] = useState(false)


    const handleButtonLogin = (username, password) => {
        setIsError(false)
        if (username === user.username && password === user.password) {
            setIsLogin(true)
        } else {
            setIsError('Username dan Password Salah')
            setIsLogin(false)
        }


    }
    return (
        <AuthContext.Provider value={{ isLogin, handleButtonLogin, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext