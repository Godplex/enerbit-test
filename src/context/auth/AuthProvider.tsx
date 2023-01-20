import Cookies from 'js-cookie';
import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { IUser } from '../../interfaces';
import { AuthContext, authReducer } from './';

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    useEffect(() => {

        const checkUser = async () => {
            if (!Cookies.get('username') || !Cookies.get('password')) return;
            try {
                const username = Cookies.get('username')!;
                const password = Cookies.get('password')!;
                validAdminUser({ username, password });
            } catch (error) {
                console.log(error)
            }
        }

        checkUser();
    }, []);

    const validAdminUser = ({ username, password }: IUser) => {
        if (username === "admin" && password === "admin") {
            Cookies.set('username', username);
            Cookies.set('password', password);
            dispatch({ type: '[Auth] - Login', payload: { username, password } });
        } else {
            Cookies.remove('username');
            Cookies.remove('password');
            throw new Error("Invalid email or password.");
        }
    }


    const loginUser = (user: IUser) => {
        try {
            validAdminUser(user);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const logoutUser = () => {
        Cookies.remove('username')
        Cookies.remove('password')
        dispatch({ type: '[Auth] - Logout' });
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                loginUser,
                logoutUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};