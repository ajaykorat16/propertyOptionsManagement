import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { CForm, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useFinishes } from "contexts/FinishesContext";
import { useCategory } from "contexts/CategoryContext";
import { useAuth } from "contexts/AuthContext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { cilImage, cilPencil, cilXCircle } from "@coreui/icons";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

import { Dropdown } from "primereact/dropdown";
import CIcon from "@coreui/icons-react";
import Sidebar2 from "components/Sidebar2";
import CategoryList from "pages/CategoryList"
import Loader from '../../components/Loader/Loader';
import { Icon } from "@iconify/react";

const FinishespagePage = () => {

  const { getAllFinishes, addFinishes, getFinishesById, updateFinishes, deleteFinishes, getSpecificBoard } = useFinishes()
  const { getCategories } = useCategory();
  const { toast } = useAuth()

  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState(null);
  const [filterProperties, setFilterProperties] = useState(null);
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);
  const [finishes, setFinishes] = useState([])
  const [finishesValue, setFinishesValue] = useState({ category: "", name: "", photo: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCategory, setShowCategory] = useState(false);
  const [createFinishes, setCreateFinishes] = useState(false);
  const [editFinishes, setEditFinishes] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [finishesId, setFinishesId] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false)

  const navigate = useNavigate()

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

  const getProperties = async () => {
    const properties  = await getSpecificBoard()
    setProperties(properties)
  }

  const categoryOptions = categories.map((category) => ({ label: category.name, value: category._id, }));
  const propertyOptions = properties.map((property) => ({ label: property.project, value: property.id, }));

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
    getProperties();
  }, []);

  useEffect(() => {
    if (!showCategory) {
      getCategory()
    }
  }, [showCategory]);

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

  const handleRemove = async () => {
    setSelectedImage(null);
    setFinishesValue({ ...finishesValue, photo: "" })
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toast ref={toast} id="toast" />
          {editFinishes && confirmDelete && !showCategory && <ConfirmDialog />}
          <CategoryList showCategory={showCategory} setShowCategory={setShowCategory} />
          <div>
            <CModal
              alignment="center"
              visible={visible}
              onClose={handleClose}
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
                    <div className="border mb-2">
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
                      {selectedImage && <button onClick={handleRemove}>Remove</button>}
                    </div>
                  </div>
                </CModalBody>
                <CModalFooter className="mb-3">
                  {editFinishes && !confirmDelete && <Button className="deleteButton" onClick={() => handleDeleteFinishes(finishesId)}>Delete</Button>}
                  <Button className="modelButton" type="submit">Save</Button>
                </CModalFooter>
              </CForm>
            </CModal>
          </div>
          <div className="topBarForMob">
            <Img
              onClick={() => navigate('/dashboard/finishes')}
              className="cursor-pointer"
              id="logo"
              src="/images/logo_2.png"
              alt="logo"
            />
            <div className="hamburgerMenu" onClick={() => {
              setShowSidebar(prev => !prev);
            }}>
              {showSidebar ? <Icon icon="akar-icons:cross" height={30} width={30} /> : <Icon icon="cil:hamburger-menu" height={30} width={30} />}
            </div>
          </div>
          <div className="bg-white-A700 flex  font-orbitron sm:gap-5 md:gap-5  w-full">
            <div className={`md:px-5 w-[17%] md:w-[30%] md:w-full mainSidebar ${showSidebar ? "showSidebar" : ""}`}>
              <Sidebar2 className="!w-[232px] bg-gray-900_03 flex inset-[0] justify-center overflow-auto" />
            </div>
            <div className="bg-white-A700 flex flex-col mainFinisherWrapper font-montserrat items-center justify-start p-10 md:px-5 w-[83%] ">
              <div className="flex flex-col justify-start mb-[159px] mt-[18px] w-full">
                <Text
                  className="md:ml-[0] text-center md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtMontserratRomanSemiBold32"
                >
                  Finishes
                </Text>
                <div className="flex  md:gap-5 items-center justify-between mt-[76px] sm:flex-col">
                  <div className="flex  items-center">
                    <Img
                      className="h-6 w-6 cursor-pointer mr-2"
                      src="/images/img_gridiconsadd.svg"
                      alt="gridiconsadd"
                      onClick={() => { setShowCategory(true) }}
                    />
                    <Text
                      className="text-base text-gray-900_03 mr-4"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      Category
                    </Text>
                    <Dropdown
                      value={filter}
                      placeholder="Select Category"
                      options={categoryOptions}
                      onChange={(e) => setFilter(e.target.value)}
                      className="rounded-md text-xs bg-fill text-white_A700 border border-gray-500_7f shadow-bs  border-solid text-base text-left sm:w-[30vh] w-[38.3vh]"
                    />
                  </div>
                  <div className="flex items-center sm:ml-[10%]">
                    <Text
                      className="text-base text-gray-900_03 mr-4"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      Property
                    </Text>
                    <Dropdown
                      value={filterProperties}
                      placeholder="Select Property"
                      options={propertyOptions}
                      onChange={(e) => setFilterProperties(e.target.value)}
                      className="rounded-md text-xs bg-fill text-white_A700 border border-gray-500_7f shadow-bs  border-solid text-base text-left sm:w-[30vh] w-[38.3vh]"
                    />
                  </div>
                  <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center" onClick={handleModal}>
                    Add new
                  </Button>
                </div>
                <div className=" flex flex-col items-center justify-start">
                  <div className="inner-container flex flex-col gap-4 items-center " orientation="vertical">
                    <div className="items-container">
                      {finishes.length !== 0 ? (
                        finishes.map((f) => (
                          <div
                            key={f._id}
                            className="item singleFinisherItem flex flex-col items-center justify-start"

                          >
                            <div className="imageContainerForIcon relative">
                              <Img
                                className="finishesImg"
                                src={f.photo === null ? `/images/noImageAvailable.jpg` : f.photo}
                                alt={f.name}
                              />
                              <div className="edit-icon-container">
                                <div className="edit-icon-shadow">
                                  <CIcon icon={cilPencil} className="edit-icon" onClick={() => handleEditFinishes(f._id)} />
                                </div>
                              </div>
                            </div>
                            <Text className="text-center finisher_text break-words" size="txtMontserratRomanRegular14">
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
