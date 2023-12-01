import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Button, Img, List, SelectBox, Text } from "components";
import { CButton, CForm, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useFinishes } from "contexts/FinishesContext";
import { useCategory } from "contexts/CategoryContext";
import { useAuth } from "contexts/AuthContext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { cilImage, cilPencil, cilXCircle } from "@coreui/icons";
import { Toast } from "primereact/toast";
import CIcon from "@coreui/icons-react";
import Sidebar2 from "components/Sidebar2";
import CategoryList from "pages/CategoryList"
import Loader from '../../components/Loader/Loader';

const FinishespagePage = () => {

  const { getAllFinishes, addFinishes, getFinishesById, updateFinishes, deleteFinishes } = useFinishes()
  const { getCategories } = useCategory();
  const { toast } = useAuth()

  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState(null);
  const [categories, setCategories] = useState([]);
  const [finishes, setFinishes] = useState([])
  const [finishesValue, setFinishesValue] = useState({ category: "", name: "", photo: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCategory, setShowCategory] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [createFinishes, setCreateFinishes] = useState(false);
  const [editFinishes, setEditFinishes] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [finishesId, setFinishesId] = useState(null);

  const fetchFinishes = async () => {
    setIsLoading(true);
    const finishes = await getAllFinishes(filter);
    setFinishes(finishes.finishes);
    setIsLoading(false);
  };

  const fetchSingleFinishes = async (id) => {
    try {
      let { finishes } = await getFinishesById(id);
      if (finishes.photo !== null) {
        const response = await fetch(finishes.photo);
        const blob = await response.blob();

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;

          setFinishesValue({
            ...finishesValue,
            category: finishes.category,
            name: finishes.name,
            photo: base64String,
          });
          setSelectedImage(base64String);

        };
        reader.readAsDataURL(blob);
      } else {
        setFinishesValue({ ...finishesValue, category: finishes.category, name: finishes.name, photo: finishes.photo })
        setSelectedImage(finishes.photo)
      }
    } catch (error) {
      console.error('Error fetching single finishes:', error);
    }

  };

  const handleEditFinishes = async (id) => {
    try {
      setVisible(true)
      setEditFinishes(true)
      setFinishesId(id)
      setConfirmDelete(false);
      await fetchSingleFinishes(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFinishes = async () => {
    try {
      setConfirmDelete(true);

      confirmDialog({
        message: 'Are you sure you want to delete this Finishes?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        position: 'top',
        accept: async () => {
          await deleteFinishes(finishesId)
          fetchFinishes()
          setFinishesId(null)
          setVisible(false)
        },
        reject: () => {
          setConfirmDelete(false);
        },
      });
    } catch (error) {
      console.log(error)
    }
  }

  const getCategory = async () => {
    const { category } = await getCategories()
    setCategories(category)
  }

  const categoryOptions = categories.map((category) => ({ label: category.name, value: category._id, }));

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFinishesValue({ ...finishesValue, photo: reader.result })
      };
      reader.readAsDataURL(file);
    }
    setSelectedImage(file)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (createFinishes) {
        const data = await addFinishes(finishesValue)
        if (typeof data !== 'undefined' && !data.error) {
          setFinishesValue({ category: "", name: "", photo: "" })
          setVisible(false);
          setCreateFinishes(false)
          fetchFinishes();
        }
      } else if (editFinishes && finishesId) {
        const data = await updateFinishes(finishesValue, finishesId)
        if (typeof data !== 'undefined' && !data.error) {
          setFinishesValue({ category: "", name: "", photo: "" })
          setVisible(false);
          setEditFinishes(false)
          setFinishesId(null)
          fetchFinishes();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFinishes();
  }, [filter]);

  useEffect(() => {
    getCategory()
  }, []);

  const handleModal = async () => {
    setVisible(true)
    setCreateFinishes(true);
    setFinishesValue({ category: "", name: "", photo: "" })
    setSelectedImage(null)
  }

  const handleClose = async () => {
    setVisible(false);
    setCreateFinishes(false);
    setFinishesId(null)
    setEditFinishes(false)
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toast ref={toast} />
          {editFinishes && confirmDelete && !showCategory && <ConfirmDialog />}
          <CategoryList showCategory={showCategory} setShowCategory={setShowCategory} />
          <div>
            <CModal
              alignment="center"
              visible={visible}
              onClose={handleClose}
              backdrop="static"
            >``
              <div className="modelCloseButton">
                <CIcon
                  icon={cilXCircle}
                  size="xl"
                  onClick={handleClose}
                />
              </div>
              <CModalHeader closeButton={false}>
                <CModalTitle>{editFinishes ? ("Edit Finishes") : ("Create New Finishes")}</CModalTitle>
              </CModalHeader>
              <CForm onSubmit={handleSubmit}>
                <CModalBody>
                  <CFormSelect
                    id="inputUserName"
                    label="Select Category"
                    className="mb-4"
                    value={finishesValue.category}
                    onChange={(e) => setFinishesValue({ ...finishesValue, category: e.target.value })}
                  >
                    <option value="" disabled >
                      Select Category
                    </option>
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </CFormSelect>
                  <CFormInput
                    type=""
                    id="inputName"
                    label="Name"
                    className="mb-4"
                    value={finishesValue.name}
                    onChange={(e) => setFinishesValue({ ...finishesValue, name: e.target.value })}
                  />
                  <div className=" text-center">
                    <label htmlFor="fileInput" className="custom-file-input-label mb-2">
                      Click to Upload Image
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="custom-file-input"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-center ">
                    <div className="border mb-2 w-75">
                      <div className="d-flex justify-content-center">
                        {selectedImage ? (
                          <img
                            alt="not found"
                            width={"250px"}
                            style={{ padding: "10px" }}
                            src={finishesValue.photo ? finishesValue.photo : selectedImage}
                          />
                        ) : (
                          <CIcon width={250} style={{ padding: "70px" }} icon={cilImage} size="xl" />
                        )}
                      </div>
                      {selectedImage && <button onClick={() => setSelectedImage(null)}>Remove</button>}
                    </div>
                  </div>
                </CModalBody>
                <CModalFooter className="mb-3">
                  {editFinishes && !confirmDelete && <Button className="deleteButton me-5" onClick={() => handleDeleteFinishes(finishesId)}>Delete</Button>}
                  <Button className="modelButton" type="submit">Submit</Button>
                </CModalFooter>
              </CForm>
            </CModal>
          </div>
          <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
            <div className="md:px-5 relative w-[17%] md:w-full">
              <Sidebar2 className="!w-[232px] md:!w-[80px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
            </div>
            <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start p-10 md:px-5 w-[84%] md:w-full">
              <div className="flex flex-col justify-start mb-[159px] mt-[18px] w-full">
                <Text
                  className="md:ml-[0] text-center md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtMontserratRomanSemiBold32"
                >
                  Finishes
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[76px] w-full">
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[42%] md:w-full">
                    <Img
                      className="h-6 w-6 cursor-pointer"
                      src="/images/img_gridiconsadd.svg"
                      alt="gridiconsadd"
                      onClick={() => { setShowCategory(true) }}
                    />
                    <Text
                      className="text-base text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      Category
                    </Text>
                    <SelectBox
                      className="border border-gray-500_7f border-solid text-base text-left w-[81%] sm:w-full shadow-bs cursor-pointer"
                      placeholderClassName="text-gray-900_01"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] w-2.5 cursor-pointer"
                          src="/images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="groupTwenty"
                      value={filter}
                      options={categoryOptions}
                      onChange={(e) => setFilter(e)}
                      isSearchable={false}
                      placeholder="Select Category"
                      color="white_A700"
                    />
                  </div>
                  <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center" onClick={handleModal}>
                    Add new
                  </Button>
                </div>
                <div className="container flex flex-col items-center justify-start ml-10 md:ml-[0] mt-14 w-[86%] md:w-full ">
                  <div className="inner-container flex flex-col gap-4 items-center w-full " orientation="vertical">
                    <div className="items-container flex flex-1 md:flex-col flex-row gap-2 items-center justify-between my- w-full ">
                      {finishes.length !== 0 ? (
                        finishes.map((f) => (
                          <div
                            key={f._id}
                            className="item relative flex flex-col gap-2 items-center justify-start w-full sm:w-1/2 md:w-1/3"
                            onMouseEnter={() => setHoveredItemId(f._id)}
                            onMouseLeave={() => setHoveredItemId(null)}
                          >
                            <Img
                              className="md:h-auto"
                              src={f.photo === null ? `/images/noimage.png` : f.photo}
                              alt="imageFive"
                            />
                            {hoveredItemId === f._id && (
                              <div className="edit-icon-container">
                                <div className="edit-icon-shadow">
                                  <CIcon icon={cilPencil} className="edit-icon" onClick={() => handleEditFinishes(f._id)} />
                                </div>
                              </div>
                            )}
                            <Text className="text-center w-full" size="txtMontserratRomanRegular14">
                              {f?.name}
                            </Text>
                          </div>
                        ))
                      ) : (
                        "Finishes Not Found"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </>
      )
      }
    </>
  );
};

export default FinishespagePage;
