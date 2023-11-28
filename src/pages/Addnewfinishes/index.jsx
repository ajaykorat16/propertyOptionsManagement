import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, SelectBox, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const kitchenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddnewfinishesPage = () => {
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
        <div className="bg-white-A700 flex flex-col font-montserrat justify-start mb-[97px] md:mt-0 mt-[27px] p-4 md:px-5 w-[33%] md:w-full">
          <Img
            className="h-6 md:ml-[0] ml-[38rem] w-6"

            src="images/img_zondiconscloseoutline.svg"
            alt="zondiconscloseo"
          />
          <Text
            className="md:ml-[0] ml-[94px] mt-[9px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl ml-[13rem]"
            size="txtMontserratRomanSemiBold24"
          >
            Create New Finishes
          </Text>
          <div className="flex flex-col items-center justify-start mb-[26px] mt-[35px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtMontserratRomanMedium16"
                >
                  Select Category
                </Text>
                <SelectBox
                  className="border border-gray-500_7f border-solid text-base text-left w-full"
                  placeholderClassName="text-gray-900_02"
                  indicator={
                    <Img
                      className="h-[5px] mr-[0] w-2.5"
                      src="images/img_vector.svg"
                      alt="Vector"
                    />
                  }
                  isMulti={false}
                  name="groupTwenty"
                  options={kitchenOptionsList}
                  isSearchable={false}
                  placeholder="Kitchen"
                  color="white_A700"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start mt-[18px] w-full">
              <Text
                className="text-base text-gray-900"
                size="txtMontserratRomanMedium16"
              >
                Name
              </Text>
              <Input
                name="rectangleTwo"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-gray-500 border-solid flex h-10 w-full"
              ></Input>
            </div>
            <div className="flex flex-col items-center justify-start mt-[27px] w-[66%] md:w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-base text-light_blue-500"
                  size="txtMontserratRomanSemiBold16"
                >
                  Click to Upload Image
                </Text>
                <div className="bg-white-A700 border border-gray-500_cc border-solid flex flex-col h-[200px] items-center justify-start p-[62px] md:px-10 sm:px-5 w-[200px]">
                  <Img
                    className="h-[59px] mb-[17px] w-[59px]"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                </div>
              </div>
            </div>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] mt-10 text-base text-center">
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddnewfinishesPage;
