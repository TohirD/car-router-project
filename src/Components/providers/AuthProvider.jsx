import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    return(
        <AuthContext.Provider value={{user, setUser, password, setPassword}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider