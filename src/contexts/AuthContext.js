import { useState, useEffect, useContext, createContext } from "react";
import { baseURL } from "../lib";
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logout = () => {
        try {
            const data = localStorage.getItem('auth')
            if (data) {
                localStorage.removeItem("auth")
                setAuth({
                    user: null,
                    token: ""
                })
                setIsLoggedIn(false)
            }
        } catch (error) {
            console.log(error);
        }
    };

    axios.defaults.headers.common["Authorization"] = auth?.token

    const login = async (email, password) => {
        try {
            const { data } = await axios.post(`${baseURL}/user/login`, { email, password });

            if (data.error === false) {
                setIsLoggedIn(true)
                setAuth({
                    ...auth,
                    user: data.user,
                    token: data.token
                })
                localStorage.setItem('auth', JSON.stringify(data))
            }
        } catch (error) {
            if (error.response) {
                const errors = error.response.data.errors;
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    // toast.current.show({ severity: 'error', summary: 'Login', detail: "Please fill all fields.", life: 3000 })
                } else {
                    const errorMessage = error.response.data.message;
                    // toast.current.show({ severity: 'error', summary: 'Login', detail: errorMessage, life: 3000 })
                }
            } else {
                // toast.current.show({ severity: 'error', summary: 'Login', detail: 'An error occurred. Please try again later.', life: 3000 })
            }
        }
    };

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={{ auth, login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }