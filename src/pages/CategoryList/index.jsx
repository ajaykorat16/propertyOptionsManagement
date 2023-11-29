import React, { useEffect, useState } from "react";
import { Button, Img, Input, List, SelectBox, Text } from "components";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import {useCategory} from '../../contexts/CategoryContext'

const CategoryList = ({showCategory,setShowCategory}) => {
  const [categories, setCateories] = useState([])
  const {getCateories} = useCategory()

  const fetchDepartments = async () => {
    let categoryData = await getCateories();
    setCateories(categoryData.category)
  };

  useEffect(() => {
    fetchDepartments()
  }, [])
  


  return (
    <>
      <CModal
        alignment="center"
        visible={showCategory}
        onClose={() => setShowCategory(false)}
        className="mainBody"
      >
        <CModalBody>
        <div className="bg-white-A700 flex flex-col font-montserrat justify-start mb-[257px] ml-[13%] md:px-5 w-[33%] md:w-full">
          <Img
            className="h-6 md:ml-[0] ml-[35vh] mt- [7vh] w-6 mb-[20px]"
            src="images/img_zondiconscloseoutline.svg"
            alt="zondiconscloseo"
            onClick = {()=> setShowCategory(false)}
          />
          <Text
            className="md:ml-[0] ml-[94px]  text-2xl md:text-[22px] text-gray-900_01 sm:text-xl font-bold"
            size="txtMontserratRomanSemiBold24"
          >
            Category
          </Text>
          <div className="flex flex-col gap-[25px] items-center justify-start mb-[225px] mt-[30px] mx-auto w-[95%] md:w-full">
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              {categories && categories.map((c) => {
                return (
                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                <Text
                  className="text-gray-900_02 text-sm"
                  size="txtMontserratRomanMedium14"
                >
                 {c.name}
                </Text>
                <Img
                  className="h-5 mb-0.5 ml-[178px] w-5"
                  src="images/img_edit.svg"
                  alt="edit"
                />
                <Img
                  className="h-5 ml-3 mt-0.5 w-5"
                  src="images/img_materialsymbol_gray_900.svg"
                  alt="materialsymbol"
                />
              </div>
                )
              })}
            </List>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[30px] items-start justify-start p-[3px] w-full"
              style={{ backgroundImage: "url('images/img_group57.svg')" }}
            >
               <div className="flex flex-col gap-[9px] items-start justify-start mt-[18px] w-full w-[32vh]">
              <Input
                name="rectangleTwo"
                placeholder="Enter new category"
                className="p-0 w-full"
                wrapClassName="border border-gray-500 border-solid flex h-10 w-full"
              ></Input>
            </div>
              <div className="flex flex-row gap-[7px] items-center justify-start md:ml-[0] ml-[3px] w-[35%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_gridiconsadd.svg"
                  alt="gridiconsadd"
                />
                <Text
                  className="text-gray-900_02 text-sm w-[20px]"
                  size="txtMontserratRomanMedium14"
                >
                  Add new
                </Text>
              </div>
            </div>
          </div>
        </div>
        </CModalBody>
      </CModal>
    </>
  );
};

export default CategoryList;
