import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";
import { baseURL } from "../lib";
import axios from "axios";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const { auth, toast } = useAuth();

    const headers = {
        Authorization: auth?.token,
    };

    //Get Category List
    const getCategories = async (id) => {
        try {
            let res
            if (id) {
                res = await axios.get(`${baseURL}/category/list?id=${id}`, { headers });
            } else {
                res = await axios.get(`${baseURL}/category/list`, { headers });
            }
            if (res.data.error === false) {
                return res.data
            }
        } catch (error) {
            console.log(error);
        }
    };

    //Create Category
    const createCategory = async (categoryData) => {
        try {
            const { data } = await axios.post(`${baseURL}/category/create`, categoryData, { headers });

            if (data.error === false) {
                getCategories()
                toast.current?.show({ severity: 'success', summary: 'Category', detail: data.message, life: 3000 })
                return data;
            } else {
                toast.current?.show({ severity: 'error', summary: 'Category', detail: data.message, life: 3000 })
            }
        } catch (error) {
            if (error.response) {
                const errors = error.response.data.errors;
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    if (errors.length > 1) {
                        toast.current?.show({ severity: 'error', summary: 'Category', detail: "Please fill all fields.", life: 3000 })
                    } else {
                        toast.current?.show({ severity: 'error', summary: 'Category', detail: errors[0].msg, life: 3000 })
                    }
                }
            } else {
                toast.current?.show({ severity: 'error', summary: 'Category', detail: 'An error occurred. Please try again later.', life: 3000 })
            }
        }
    };

    //Delete Category
    const deleteCategory = async (id) => {
        try {
            const { data } = await axios.delete(`${baseURL}/category/delete/${id}`, { headers })
            if (data.error === false) {
                getCategories()
                toast.current?.show({ severity: 'success', summary: 'Category', detail: data.message, life: 3000 })
            } else {
                toast.current?.show({ severity: 'error', summary: 'Category', detail: data.message, life: 3000 })
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Update Category
    const updateCategory = async (updatedCategory, id) => {
        try {
            const { data } = await axios.put(`${baseURL}/category/update/${id}`, updatedCategory, { headers })
            if (data.error === false) {
                getCategories()
                toast.current?.show({ severity: 'success', summary: 'Category', detail: data.message, life: 3000 })
                return data
            } else {
                toast.current?.show({ severity: 'error', summary: 'Category', detail: data.message, life: 3000 })
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
        <CategoryContext.Provider value={{ getCategories, createCategory, deleteCategory, updateCategory, getSingleCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

//custom hook
const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
