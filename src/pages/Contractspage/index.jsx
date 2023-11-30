import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, SelectBox, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const sortOptionList = [
  { label: "Date", value: "Date" },
  { label: "Indentification Number", value: "Indentification Number" },
];

const filterOptionList = [
  { label: "All", value: "All" },
  { label: "Unread", value: "Unread" },
  { label: "Read", value: "Read" },
];

const ContractspagePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_thumbsup.svg" alt="thumbsup" />
      ),
      label: "Finishes",
      href: "/finishespage",
      active: window.location.pathname === "/finishespage",
    },
    {
      icon: (
        <Img
          className="h-5 mt-[3px] w-5"
          src="images/img_claritycontractline_light_blue_500.svg"
          alt="claritycontract"
        />
      ),
      label: "Contract",
      href: "/contractspage",
      active: window.location.pathname === "/contractspage",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_materialsymbol_white_a700.svg"
          alt="materialsymbol"
        />
      ),
      label: "Trash",
      href: "/trash",
      active: window.location.pathname === "/trash",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
          {/* <Text
            className="ml-[29px] mt-[27px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text> */}
          <Sidebar2 className="w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
        </div>
        <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start p-10 md:px-5 w-[84%] md:w-full">
          <Text
            className="mt-[19px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
            size="txtMontserratRomanSemiBold32"
          >
            Contracts
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[73px] w-full">
            <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:mt-0 mt-0.5 w-[35%] md:w-full">
              <Text
                className="text-base text-gray-900_03"
                size="txtMontserratRomanSemiBold16Gray90003"
              >
                Filter
              </Text>
              <SelectBox
                className="border border-gray-500_7f border-solid text-base text-left w-[81%] sm:w-full"
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
                options={filterOptionList}
                isSearchable={false}
                placeholder="Date"
                color="white_A700"
              />
            </div>
            <div className="flex md:flex-1 flex-row gap-4 items-center justify-between mb-0.5 w-[37%] md:w-full">
              <Text
                className="text-base text-gray-900_03"
                size="txtMontserratRomanSemiBold16Gray90003"
              >
                Sort by
              </Text>
              <SelectBox
                className="border border-gray-500_7f border-solid text-base text-left w-[81%] sm:w-full"
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
                options={sortOptionList}
                isSearchable={false}
                placeholder="Date"
                color="white_A700"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-[329px] mt-12 w-[98%] md:w-full">
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-row items-end justify-evenly w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_lafilecontract.svg"
                    alt="lafilecontract"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                    <Text
                      className="text-base text-center text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      ID 15056897
                    </Text>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      21/11/2023
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractspagePage;
