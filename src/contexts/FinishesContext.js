import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";
import { baseURL } from "../lib";
import axios from 'axios'

const FinishesContext = createContext()

const FinishesProvider = ({ children }) => {
    const { auth } = useAuth();

    const headers = {
        Authorization: auth?.token,
    };

    const getAllFinishes = async (query) => {
        try {
            let res;
            if (query) {
                res = await axios.post(`${baseURL}/finishes/search-finishes`, { filter: query }, { headers });
            } else {
                res = await axios.get(`${baseURL}/finishes/list`, { headers });
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
                console.log("Finishes added success")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateFinishes = async (finishesData, id) => {
        try {
            const { data } = await axios.put(`${baseURL}finishes/update/${id}`, finishesData, { headers });

            if (data.error === false) {
                console.log("Finishes update success")
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
                console.log("Finishes deleted success")
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
