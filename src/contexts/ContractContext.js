import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";
import { baseURL } from "../lib";
import axios from 'axios'

const ContractContext = createContext()

const ContractProvider = ({ children }) => {
    const { auth, toast } = useAuth();

    const headers = {
        Authorization: auth?.token,
    };

    const getAllContract = async (query, sortField) => {
        try {
            const res = await axios.post(`${baseURL}/contract/search-contract`, { filter: query, sortField }, { headers });

            if (res.data.error === false) {
                return res.data
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getAllTrashContract = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/contract/trash/list`, { headers });

            if (data.error === false) {
                return data
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

    const deleteContracts = async (contracts) => {
        try {
            const { data } = await axios.delete(`${baseURL}/contract/delete`, { headers, data: { contracts }, });

            if (data.error === false) {
                setTimeout(function () {
                    toast.current?.show({ severity: 'success', summary: 'Trash', detail: data.message, life: 3000 })
                }, 1000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const restoreContracts = async (contracts) => {
        try {
            const { data } = await axios.put(`${baseURL}/contract/trash/restore`, { contracts }, { headers });
            if (data.error === false) {
                setTimeout(function () {
                    toast.current?.show({ severity: 'success', summary: 'Trash', detail: data.message, life: 3000 })
                }, 1000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const moveToTrash = async (id) => {
        try {
            const { data } = await axios.post(`${baseURL}/contract/move-to-trash`, { id }, { headers });
            if (data.error === false) {
                setTimeout(function () {
                    toast.current?.show({ severity: 'success', summary: 'Contracts', detail: data.message, life: 3000 })
                }, 1000);
                return data
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContractContext.Provider value={{ getAllContract, addContract, getContractById, getAllTrashContract, deleteContracts, restoreContracts, moveToTrash }}>
            {children}
        </ContractContext.Provider>
    )
}

const useContract = () => useContext(ContractContext)

export { useContract, ContractProvider }
