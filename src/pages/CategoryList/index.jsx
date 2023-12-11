import React, { useEffect, useState } from "react";
import { Button, Text } from "components";
import { CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import { useCategory } from '../../contexts/CategoryContext'
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash, cilXCircle } from '@coreui/icons';
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useAuth } from "contexts/AuthContext";
import { useFinishes } from "contexts/FinishesContext";

const CategoryList = ({ showCategory, setShowCategory }) => {
  const { getCategories, createCategory, deleteCategory, updateCategory, getSingleCategory } = useCategory()
  const { toast } = useAuth()
  const { getSpecificBoard } = useFinishes()
  const [categories, setCateories] = useState([])
  const [propertyOptions, setPropertyOptions] = useState([])
  const [newCategory, setNewCategory] = useState({ name: "", property: "" })
  const [addNew, setAddNew] = useState(false)
  const [editCategory, setEditCategory] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  let isMounted = true;

  const getProperties = async () => {
    const properties = await getSpecificBoard()
    if (isMounted) {
      setPropertyOptions(properties)
    }
  }

  const fetchCategory = async () => {
    let categoryData = await getCategories();
    if (isMounted) {
      setCateories(categoryData.category)
    }
  };

  const fetchSingleCategory = async (id) => {
    let category = await getSingleCategory(id);
    setNewCategory({ ...newCategory, name: category.name, property: category.property })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (addNew) {
        const data = await createCategory(newCategory);
        if (typeof data !== 'undefined' && data.error === false) {
          setNewCategory({ name: "", property: "" })
          setAddNew(false);
        }
      } else if (editCategory && editingCategoryId) {
        const data = await updateCategory(newCategory, editingCategoryId);
        if (typeof data !== 'undefined' && data.error === false) {
          setNewCategory({ name: "", property: "" })
          setEditCategory(false);
          setEditingCategoryId(null);
        }
      }
      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      confirmDialog({
        message: 'Are you sure you want to delete this Category?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        position: 'top',
        accept: async () => {
          await deleteCategory(id)
          fetchCategory()
        },
      });
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditCategory = async (id) => {
    try {
      setEditCategory(true);
      setEditingCategoryId(id);
      await fetchSingleCategory(id);
      setEditCategory(true);
      setEditingCategoryId(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    if (addNew) {
      setNewCategory({ name: "", property: "" })
      setAddNew(false)
    } else if (editCategory) {
      setNewCategory({ name: "", property: "" })
      setEditCategory(false)
    }
    fetchCategory()
  }

  useEffect(() => {
    fetchCategory()
    getProperties();
  }, [])

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClose = async () => {
    setShowCategory(false)
    setEditCategory(false)
    setEditingCategoryId(null)
    setNewCategory({ name: "", property: "" })
    setAddNew(false)
  }

  return (
    <>
      <Toast ref={toast} id="toast" />
      <ConfirmDialog />
      <CModal
        alignment="center"
        visible={showCategory}
        onClose={handleClose}
        className="mainBody"
        size="sm"
        backdrop="static"
      >
        <div className="modelCloseButton">
          <CIcon
            icon={cilXCircle}
            size="xl"
            onClick={handleClose}
          />
        </div>
        <CModalHeader closeButton={false}>
          <CModalTitle className="text-center text-2xl">
            Category
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {categories && categories.map((c) => {
            return (
              <div className="category-container d-flex justify-content-between mb-[20px]" key={c._id}>
                <div>
                  <Text
                    className="category-name break-all">
                    {c.name}
                  </Text>
                </div>
                <div className="d-flex cursor-pointer">
                  <CIcon icon={cilPencil}
                    className="h-[30px] w-[30px]"
                    style={{
                      color: 'black',
                      marginRight: "10px"
                    }}
                    onClick={() => handleEditCategory(c._id)}
                  />
                  <CIcon icon={cilTrash}
                    className="h-[30px] w-[30px]"
                    style={{
                      color: 'black',
                    }}
                    onClick={() => handleDeleteCategory(c._id)}
                  />
                </div>
              </div>
            )
          })}
        </CModalBody>
        <CModalFooter>
          {addNew || (editCategory && editingCategoryId) ? (
            <>
              <form onSubmit={handleSubmit}>
                <div className="md:gap-5 items-center sm:flex-col">
                  <div>
                    <CFormSelect
                      id="inputUserName"
                      className="mb-2"
                      value={newCategory.property}
                      onChange={(e) => setNewCategory({ ...newCategory, property: e.target.value })}
                    >
                      <option value="" disabled >
                        Select Property
                      </option>
                      {propertyOptions.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                  <div>
                    <CFormInput
                      placeholder="Enter category"
                      className="sm:w-[272px] mb-2"
                      type=""
                      value={newCategory.name}
                      onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    />
                  </div>
                  <div className="d-flex justify-content-between sm:m-[0px]">
                    <Button className="min-w-[50px] text-center mr-[15px]" type="submit">
                      Save
                    </Button>
                    <Button className="min-w-[50px] text-center bg-gray-400" type="button" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <Button onClick={() => setAddNew(true)} className="modelButton btn btn-info ">
              Add New
            </Button>
          )}
        </CModalFooter>
      </CModal >
    </>
  );
};

export default CategoryList;
