import { useReducer } from "react";
import types from "../types/types";
import { AuthContext } from "./AuthContext";
import authReducer from "./authReducer";

const initialState = {
    logged: false
}

const init = () => {
    const user = localStorage.getItem('user');

    return {
        logged: !!user,
        user: user,
    }
}

const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState, init );

    const login = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: name
        }

        localStorage.setItem('user', name);

        dispatch( action );
    }

    const logout = () => {
        const action = {
            type: types.logout
        }

        localStorage.removeItem('user');

        dispatch( action );
    }

  return (
    <AuthContext.Provider value={{ login: login, logout: logout, authState }}>
        { children }
    </AuthContext.Provider>
    )
}

export default AuthProvider;