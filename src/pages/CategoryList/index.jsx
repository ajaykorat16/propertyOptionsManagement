import React, { useEffect, useState } from "react";
import { Button, Img, Input, List, SelectBox, Text } from "components";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import { useCategory } from '../../contexts/CategoryContext'
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash, cilXCircle } from '@coreui/icons';
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useAuth } from "contexts/AuthContext";


const CategoryList = ({ showCategory, setShowCategory }) => {
  const { getCategories, createCategory, deleteCategory, updateCategory, getSingleCategory } = useCategory()
  const { toast } = useAuth()
  const [categories, setCateories] = useState([])
  const [newCategory, setNewCategory] = useState("")
  const [addNew, setAddNew] = useState(false)
  const [editCategory, setEditCategory] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const fetchCategory = async () => {
    let categoryData = await getCategories();
    setCateories(categoryData.category)
  };

  const fetchSingleCategory = async (id) => {
    let category = await getSingleCategory(id);
    setNewCategory(category.name)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (addNew) {
        const data = await createCategory(newCategory);
        if (typeof data !== 'undefined' && data.error === false) {
          setNewCategory("")
          setAddNew(false);
        }
      } else if (editCategory && editingCategoryId) {
        const data = await updateCategory(newCategory, editingCategoryId);
        if (typeof data !== 'undefined' && data.error === false) {
          setNewCategory("")
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    if (addNew) {
      setNewCategory("")
      setAddNew(false)
    } else if (editCategory) {
      setNewCategory("")
      setEditCategory(false)
    }
    fetchCategory()
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <CModal
        alignment="center"
        visible={showCategory}
        onClose={() => setShowCategory(false)}
        className="mainBody"
        backdrop="static"
      >
        <div className="modelCloseButton">
          <CIcon
            icon={cilXCircle}
            size="xl"
            onClick={() => setShowCategory(false)}
          />
        </div>
        <CModalHeader closeButton={false}>
          <CModalTitle className="text-center">
            Category
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {categories && categories.map((c) => {
            return (
              <div className="d-flex justify-content-between mb-[20px]" key={c._id}>
                <div>
                  <Text
                    size="xxl"
                  >
                    {c.name}
                  </Text>
                </div>
                <div className="d-flex cursor-pointer">
                  <CIcon icon={cilPencil}
                    size="xl"
                    style={{
                      color: 'black',
                      marginRight: "10px"
                    }}
                    onClick={() => handleEditCategory(c._id)}
                  />
                  <CIcon icon={cilTrash}
                    size="xl"
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
                <div className="d-flex justify-content-between mb-[15px]">
                  <div>
                    <Input
                      placeholder="Enter category"
                      className="leading-[normal] p-0 placeholder:text-gray-900_a2 text-left"
                      wrapClassName="border border-gray-500 border-solid w-full"
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e)} // Ensure to get the value correctly
                    />
                  </div>
                  <div className="d-flex ml-[10px]">
                    <Button className="min-w-[50px] text-center mr-[15px]" type="submit">
                      Save
                    </Button>
                    <Button className="min-w-[50px] text-center" type="button" onClick={handleCancel}>
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
      </CModal>
    </>
  );
};

export default CategoryList;
