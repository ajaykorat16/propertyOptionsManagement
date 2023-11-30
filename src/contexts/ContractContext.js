import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";
import { baseURL } from "../lib";
import axios from 'axios'

const ContractContext = createContext()

const ContractProvider = ({ children }) => {
    const { auth } = useAuth();

    const headers = {
        Authorization: auth?.token,
    };

    const getAllContract = async (query) => {
        try {
            let res;
            if (query) {
                res = await axios.post(`${baseURL}/contract/search-contract`, { filter: query }, { headers });
            } else {
                res = await axios.get(`${baseURL}/contract/list`, { headers });
            }
            if (res.data.error === false) {
                return res.data
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addContract = async (contractData) => {
        try {
            const { data } = await axios.post(`${baseURL}/contract/create`, contractData, { headers });

            if (data.error === false) {
                console.log("Finishes added success")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getContractById = async (id) => {
        try {
            const { data } = await axios.get(`${baseURL}/contract/getSingleContract/${id}`, { headers });
            if (data.error === false) {
                return data
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContractContext.Provider value={{ getAllContract, addContract, getContractById }}>
            {children}
        </ContractContext.Provider>
    )
}

const useContract = () => useContext(ContractContext)

export { useContract, ContractProvider }
