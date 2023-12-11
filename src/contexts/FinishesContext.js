import { useContext, createContext } from "react";
import { useAuth } from "./AuthContext";
import { baseURL } from "../lib";
import axios from 'axios'

const FinishesContext = createContext()

const FinishesProvider = ({ children }) => {
    const { auth, toast } = useAuth();

    const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI5OTg3MzAxMSwiYWFpIjoxMSwidWlkIjozMDc4MDQxOCwiaWFkIjoiMjAyMy0xMS0zMFQyMjoxNDowNy4zODlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjUwMjg1OSwicmduIjoidXNlMSJ9.NoCjKRfIsn9ZHq953yQv_YRjUDB7ah2_t8E9AVGx8bY`
    const API_URL = 'https://api.monday.com/v2';

    const headers = {
        Authorization: auth?.token,
    };

    const getSpecificBoard = async () => {
        try {
            const query = `query { boards(ids: 5605135736) { id name columns { id title type } items { id name column_values { id text value} } } }`;

            const { data } = await axios.post(API_URL, {
                query
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': API_KEY
                }
            });

            const boardData = data.data.boards[0].items
            const projects = boardData.map((item) => {
                const { id, column_values } = item

                return {
                    id,
                    project: column_values[3].text
                }
            })

            const uniqueProjects = projects.filter((project, index, array) => {
                const isUnique = !array.slice(0, index).some((prevProject) => prevProject.project === project.project);
                return isUnique;
              });
                      
            return uniqueProjects
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Properties', detail: 'An error occurred. Please try again later.', life: 3000 })
        }
    }
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
        <FinishesContext.Provider value={{ getAllFinishes, addFinishes, updateFinishes, getFinishesById, deleteFinishes, getSpecificBoard }}>
            {children}
        </FinishesContext.Provider>
    )
}

const useFinishes = () => useContext(FinishesContext)

export { useFinishes, FinishesProvider }
