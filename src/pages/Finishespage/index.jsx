import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Button, Img, List, SelectBox, Text } from "components";
import { CButton, CForm, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useFinishes } from "contexts/FinishesContext";
import { useCategory } from "contexts/CategoryContext";
import Sidebar2 from "components/Sidebar2";
import CategoryList from "pages/CategoryList"
import Loader from '../../components/Loader/Loader';

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FinishespagePage = () => {

  const { getAllFinishes } = useFinishes()
  const { getCateories } = useCategory();
  const [cateories, setCateories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [finishes, setFinishes] = useState([])
  const [isLoading, setIsLoading] = useState(true);
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
    console.log("hello");
    setVisible(true)
  }

  const getCateory = async () => {
    const { category } = await getCateories()
    setCateories(category)
    console.log(category);
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
              onClose={() => setVisible(false)}
            >
              <CModalHeader>
                <CModalTitle>Create New Finihes</CModalTitle>
              </CModalHeader>
              <CForm>
                <CModalBody>
                  <CFormSelect
                    id="inputUserName"
                    label="Select Category"
                    className="mb-2"
                  // value={manageLeave.user}
                  // onChange={(e) => setManageLeave({ ...manageLeave, user: e.target.value })}
                  >
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    {cateories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </CFormSelect>
                  <CFormInput
                    type="number"
                    id="leave"
                    label="Name"
                  // value={manageLeave.leave}
                  // onChange={(e) => setManageLeave({ ...manageLeave, leave: e.target.value })}
                  />
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisible(false)}> Close</CButton>
                  <CButton color="primary" type="submit">Submit</CButton>
                </CModalFooter>
              </CForm>
            </CModal>
          </div>
          <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
            <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
              {/* <Text
            className="ml-[29px] mt-[27px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text> */}
              <Sidebar2 className="!sticky w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
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
                    />
                    <Text
                      className="text-base text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >

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
                <div className="flex flex-col items-center justify-start ml-10 md:ml-[0] mt-14 w-[86%] md:w-full">
                  <List
                    className="flex flex-col gap-4 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-2 items-center justify-between w-[67%] md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-between w-1/2 sm:w-full">
                          {finishes.length !== 0 ? (
                            finishes.map((f) => (
                              <div key={f._id} className="flex flex-col gap-2 items-center justify-start w-[49%]">
                                <Img
                                  className="h-[89px] md:h-auto object-cover w-[89px]"
                                  src="images/img_image5.png"
                                  alt="imageFive"
                                />
                                <Text
                                  className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
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
                        {/* <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                        <Img
                          className="h-[89px] md:h-auto object-cover w-[89px]"
                          src="images/img_image6.png"
                          alt="imageSix"
                        />
                        <Text
                          className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                          size="txtMontserratRomanRegular14"
                        >
                          MARGRES PURE STONE GREY
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-1/2 sm:w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-[49%]">
                        <Img
                          className="h-[89px] md:h-auto object-cover w-[89px]"
                          src="images/img_image7.png"
                          alt="imageSeven"
                        />
                        <Text
                          className="text-center text-gray-900_03 text-sm"
                          size="txtMontserratRomanRegular14"
                        >
                          ALELUIA KALACATA
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                        <Img
                          className="h-[89px] md:h-auto object-cover w-[89px]"
                          src="images/img_image8.png"
                          alt="imageEight"
                        />
                        <Text
                          className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                          size="txtMontserratRomanRegular14"
                        >
                          ALELUIA KALACATA GREY
                        </Text>
                      </div> */}
                        {/* </div>
                </div> */}
                        {/* <div className="flex md:flex-1 flex-row gap-2 items-center justify-between w-[33%] md:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                    <Img
                      className="h-[89px] md:h-auto object-cover w-[89px]"
                      src="images/img_image5.png"
                      alt="imageFive_One"
                    />
                    <Text
                      className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                      size="txtMontserratRomanRegular14"
                    >
                      MARGRES PURE STONE LIGHT GREY
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                    <Img
                      className="h-[89px] md:h-auto object-cover w-[89px]"
                      src="images/img_image6.png"
                      alt="imageSix_One"
                    />
                    <Text
                      className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                      size="txtMontserratRomanRegular14"
                    >
                      MARGRES PURE STONE GREY
                    </Text>
                  </div>
                </div> */}
                        {/* </div> */}
                        {/* <div className="flex flex-1 md:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row gap-2 items-center justify-between w-[67%] md:w-full">
                <div className="flex flex-row gap-[9px] items-start justify-between w-1/2 sm:w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[49%]">
                    <Img
                      className="h-[89px] md:h-auto object-cover w-[89px]"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                    <Text
                      className="text-center text-gray-900_03 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      ALELUIA KALACATA
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                    <Img
                      className="h-[89px] md:h-auto object-cover w-[89px]"
                      src="images/img_image8.png"
                      alt="imageEight"
                    />
                    <Text
                      className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                      size="txtMontserratRomanRegular14"
                    >
                      ALELUIA KALACATA GREY
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-between w-1/2 sm:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                    <Img
                      className="h-[89px] md:h-auto object-cover w-[89px]"
                      src="images/img_image5.png"
                      alt="imageFive"
                    />
                    <Text
                      className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                      size="txtMontserratRomanRegular14"
                    >
                      MARGRES PURE STONE LIGHT GREY
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                    <Img
                      className="h-[89px] md:h-auto object-cover w-[89px]"
                      src="images/img_image6.png"
                      alt="imageSix"
                    />
                    <Text
                      className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                      size="txtMontserratRomanRegular14"
                    >
                      MARGRES PURE STONE GREY
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-row gap-[9px] items-start justify-between w-[33%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-[49%]">
                  <Img
                    className="h-[89px] md:h-auto object-cover w-[89px]"
                    src="images/img_image7.png"
                    alt="imageSeven_One"
                  />
                  <Text
                    className="text-center text-gray-900_03 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    ALELUIA KALACATA
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-[49%]">
                  <Img
                    className="h-[89px] md:h-auto object-cover w-[89px]"
                    src="images/img_image8.png"
                    alt="imageEight_One"
                  />
                  <Text
                    className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                    size="txtMontserratRomanRegular14"
                  >
                    ALELUIA KALACATA GREY
                  </Text>
                </div> */}
                      </div>
                    </div>
                  </List>
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
