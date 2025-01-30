import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'notAuthenticated' = 'notAuthenticated',
}

interface AuthState {
    status: AuthStatus;
    token?: string;

    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;

    //Methods
    loginWithEmailPassword: (email:string, password:string) => void;
    logout: () => void; 
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>()

useEffect(() => {
    setTimeout(() => {
        setStatus(AuthStatus.notAuthenticated);
    }, 1500);
}, []);


const loginWithEmailPassword = (email: string, password: string) => {

    setUser({
        name: 'Jaime León',
        email: email,
    });
    setStatus(AuthStatus.authenticated);
};

const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.notAuthenticated)
}

    return (
        <AuthContext.Provider 
        value={{
            status: status,
            user: user,

            //Getter
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,
            logout,

            //Method
            loginWithEmailPassword,
        }}
        >
            {children}
        </AuthContext.Provider>
    )

}