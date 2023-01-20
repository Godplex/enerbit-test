import { createContext } from 'react';
import { IUser } from '../../interfaces';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUser;
    loginUser: ({ username, password }: IUser) => boolean
    logoutUser: () => void
}

export const AuthContext = createContext({} as ContextProps);