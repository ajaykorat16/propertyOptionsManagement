import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Button, Img, List, SelectBox, Text } from "components";
import { CButton, CForm, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useFinishes } from "contexts/FinishesContext";
import { useCategory } from "contexts/CategoryContext";
import { cilImage, cilXCircle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import Sidebar2 from "components/Sidebar2";
import CategoryList from "pages/CategoryList"
import Loader from '../../components/Loader/Loader';

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FinishespagePage = () => {

  const { getAllFinishes, addFinishes } = useFinishes()
  const { getCateories } = useCategory();
  const [finishesValue, setFinishesValue] = useState({ category: "", name: "", photo: "" });
  const [cateories, setCateories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [finishes, setFinishes] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCategory, setShowCategory] = useState(false)

  const fetchFinishes = async () => {
    setIsLoading(true);
    const finishes = await getAllFinishes();
    console.log(finishes.finishes)
    setFinishes(finishes.finishes);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFinishes();
    getCateory()
  }, []);

  const handleModal = async () => {
    setVisible(true)
    setFinishesValue({ category: "", name: "", photo: "" })
    setSelectedImage(null)
  }

  const getCateory = async () => {
    const { category } = await getCateories()
    setCateories(category)
  }

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

  const createFinishes = async () => {
    try {
      const data = await addFinishes(finishesValue)
      if (data.error === false) {
        console.log(data);
        setFinishesValue({ user: "", monthly: "", leave: "", })
        setVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CategoryList showCategory={showCategory} setShowCategory={setShowCategory} />
          <div>
            <CModal
              alignment="center"
              visible={visible}
              size="l"
              onClose={() => setVisible(false)}
            >
              <div className="modelCloseButton">
                <CIcon
                  icon={cilXCircle}
                  size="xl"
                  onClick={() => setVisible(false)}
                />
              </div>
              <CModalHeader closeButton={false}>
                <CModalTitle>Create New Finishes</CModalTitle>
              </CModalHeader>
              <CForm onSubmit={createFinishes}>
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
                    {cateories.map((c) => (
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
                  <div className="border mb-2 ">
                    {selectedImage ? (
                      <img
                        alt="not found"
                        width={"250px"}
                        style={{ padding: "10px" }}
                        src={URL.createObjectURL(selectedImage)}
                      />
                    ) : (
                      <CIcon width={250} style={{ padding: "70px" }} icon={cilImage} size="xl" />
                    )}
                    {selectedImage && <button onClick={() => setSelectedImage(null)}>Remove</button>}
                  </div>
                </CModalBody>
                <CModalFooter className="mb-3">
                  <Button className="modelButton" type="submit">Submit</Button>
                </CModalFooter>
              </CForm>
            </CModal>
          </div>
          <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
            <div className="md:px-5 relative w-[17%] md:w-full">
              <Sidebar2 className="!sticky !w-[232px] md:!w-[80px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
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
                      className="h-6 w-6"
                      src="images/img_gridiconsadd.svg"
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
                      className="border border-gray-500_7f border-solid text-base text-left w-[81%] sm:w-full shadow-bs"
                      placeholderClassName="text-gray-900_01"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] w-2.5"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="groupTwenty"
                      options={dateOptionsList}
                      isSearchable={false}
                      placeholder="Date"
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
                          <div key={f._id} className="item flex flex-col gap-2 items-center justify-start w-full sm:w-1/2 md:w-1/3 ">
                            <Img
                              className="md:h-auto"
                              src={f.photo === null ? `images/noimage.png` : f.photo}
                              alt="imageFive"
                            />
                            <Text
                              className="text-center w-full"
                              size="txtMontserratRomanRegular14"
                            >
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
