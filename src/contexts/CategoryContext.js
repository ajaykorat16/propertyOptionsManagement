import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";
import { baseURL } from "../lib";
import axios from "axios";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const { auth } = useAuth();

    const headers = {
        Authorization: auth?.token,
    };

    //Get Category List
    const getCateories = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/category/list`, { headers });
            if (data.error === false) {
                return data
            }
        } catch (error) {
            console.log(error);
        }
    };

    //Create Category
    const createCategory = async (name) => {
        try {
            const { data } = await axios.post(`${baseURL}/category/create`, { name }, { headers });

            if (data.error === false) {
                getCateories()
                return data;
            }
        } catch (error) {
            console.log(error);
        }
    };

    //Delete Category
    const deleteCategory = async (id) => {
        try {
            const { data } = await axios.delete(`${baseURL}/category/delete/${id}`, { headers })
            if (data.error === false) {
                getCateories()
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Update Category
    const updateCategory = async (name, id) => {
        try {
            const { data } = await axios.put(`${baseURL}/category/update/${id}`, { name }, { headers })
            if (data.error === false) {
                getCateories()
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Get Single Category
    const getSingleCategory = async (id) => {
        try {
            const { data } = await axios.get(`${baseURL}/category/getSingleCategory/${id}`, { headers })
            return data.getSingle
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CategoryContext.Provider value={{ getCateories, createCategory, deleteCategory, updateCategory, getSingleCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

//custom hook
const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
