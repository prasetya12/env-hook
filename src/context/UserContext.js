import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('Ronaldo ')

    const setUserChange = (name) => {
        setUser(name)

    }
    return (
        <UserContext.Provider value={{ user, setUserChange }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}

export default UserContext