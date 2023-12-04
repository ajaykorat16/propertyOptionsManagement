import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";
import { baseURL } from "../lib";
import axios from 'axios'

const FinishesContext = createContext()

const FinishesProvider = ({ children }) => {
    const { auth, toast } = useAuth();

    const headers = {
        Authorization: auth?.token,
    };

    const getAllFinishes = async (query) => {
        try {
            let res;
            if (query) {
                res = await axios.get(`${baseURL}/api/finishes/list?filter=${query}`);
            } else {
                res = await axios.get(`${baseURL}/api/finishes/list`);
            }
            if (res.data.error === false) {
                return res.data
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addFinishes = async (finishesData) => {
        try {
            const { data } = await axios.post(`${baseURL}/finishes/create`, finishesData, { headers });
            if (data.error === false) {
                getAllFinishes()
                setTimeout(function () {
                    toast.current?.show({ severity: 'success', summary: 'Finishes', detail: data.message, life: 3000 })
                }, 500);
                return data;
            } else {
                toast.current?.show({ severity: 'error', summary: 'Finishes', detail: data.message, life: 3000 })
            }
        } catch (error) {
            if (error.response) {
                const errors = error.response.data.errors;
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    if (errors.length > 1) {
                        toast.current?.show({ severity: 'error', summary: 'Finishes', detail: "Please fill all fields.", life: 3000 })
                    } else {
                        toast.current?.show({ severity: 'error', summary: 'Finishes', detail: errors[0].msg, life: 3000 })
                    }
                }
            } else {
                toast.current?.show({ severity: 'error', summary: 'Finishes', detail: 'An error occurred. Please try again later.', life: 3000 })
            }
        }
    };

    const updateFinishes = async (finishesData, id) => {
        try {
            const { data } = await axios.put(`${baseURL}/finishes/update/${id}`, finishesData, { headers });
            if (data.error === false) {
                getAllFinishes()
                setTimeout(function () {
                    toast.current?.show({ severity: 'success', summary: 'Finishes', detail: data.message, life: 3000 })
                }, 500);
                return data;
            } else {
                toast.current?.show({ severity: 'error', summary: 'Finishes', detail: data.message, life: 3000 })
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getFinishesById = async (id) => {
        try {
            const { data } = await axios.get(`${baseURL}/finishes/getSingleFinishes/${id}`, { headers });
            if (data.error === false) {
                return data
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteFinishes = async (id) => {
        try {
            const { data } = await axios.delete(`${baseURL}/finishes/delete/${id}`, { headers });
            if (data.error === false) {
                getAllFinishes()
                setTimeout(function () {
                    toast.current?.show({ severity: 'success', summary: 'Finishes', detail: data.message, life: 3000 })
                }, 300)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FinishesContext.Provider value={{ getAllFinishes, addFinishes, updateFinishes, getFinishesById, deleteFinishes }}>
            {children}
        </FinishesContext.Provider>
    )
}

const useFinishes = () => useContext(FinishesContext)

export { useFinishes, FinishesProvider }
