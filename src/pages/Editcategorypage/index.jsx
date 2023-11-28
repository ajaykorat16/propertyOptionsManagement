import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, List, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const EditcategorypagePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_television.svg"
          alt="television"
        />
      ),
      label: "Finishes",
      href: "/addnewfinishes",
      active: window.location.pathname === "/addnewfinishes",
    },
    {
      icon: (
        <Img
          className="h-5 mt-[3px] w-5"
          src="images/img_claritycontractline.svg"
          alt="claritycontract"
        />
      ),
      label: "Contract",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_materialsymbol.svg"
          alt="materialsymbol"
        />
      ),
      label: "Trash",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 gap-[451px] md:gap-5 items-center mx-auto w-full">
        <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
          <Sidebar2 className="!sticky w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
        </div>
        <div className="bg-white-A700 flex flex-col font-montserrat justify-start mb-[257px] md:mt-0 mt-[47px] p-4 md:px-5 w-[33%] md:w-full">
          <Img
            className="h-6 md:ml-[0] ml-[277px] w-6"
            src="images/img_zondiconscloseoutline.svg"
            alt="zondiconscloseo"
          />
          <Text
            className="md:ml-[0] ml-[94px] mt-[9px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
            size="txtMontserratRomanSemiBold24"
          >
            Category
          </Text>
          <div className="flex flex-col gap-[25px] items-center justify-start mb-[225px] mt-[30px] mx-auto w-[95%] md:w-full">
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                <Text
                  className="text-gray-900_02 text-sm"
                  size="txtMontserratRomanMedium14"
                >
                  Kitchen
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
              <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                <Text
                  className="text-gray-900_02 text-sm"
                  size="txtMontserratRomanMedium14"
                >
                  Bathroom
                </Text>
                <Img
                  className="h-5 ml-40 w-5"
                  src="images/img_edit.svg"
                  alt="edit"
                />
                <Img
                  className="h-5 ml-3 w-5"
                  src="images/img_materialsymbol_gray_900.svg"
                  alt="materialsymbol"
                />
              </div>
            </List>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[30px] items-start justify-start p-[3px] w-full"
              style={{ backgroundImage: "url('images/img_group57.svg')" }}
            >
              <div className="flex flex-row gap-[7px] items-center justify-start md:ml-[0] ml-[3px] w-[35%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_gridiconsadd.svg"
                  alt="gridiconsadd"
                />
                <Text
                  className="text-gray-900_02 text-sm"
                  size="txtMontserratRomanMedium14"
                >
                  Add new
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditcategorypagePage;
