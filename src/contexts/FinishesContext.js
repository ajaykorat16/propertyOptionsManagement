import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";

const FinishesContext = createContext()

const FinishesProvider = ({ children }) => {
    const { auth } = useAuth();

    const headers = {
        Authorization: auth?.token,
    };

    const getAllFinishes = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/finishes/list`, { headers });
            if (data.error === false) {
                return data
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

    const deleteLeave = async (id) => {
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
        <FinishesContext.Provider value={{ getAllFinishes, addFinishes, updateFinishes, getFinishesById, deleteLeave }}>
            {children}
        </FinishesContext.Provider>
    )
}

const useHelper = () => useContext(FinishesContext)

export { useHelper, FinishesProvider }
