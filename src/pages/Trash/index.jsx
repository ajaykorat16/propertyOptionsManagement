import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const TrashPage = () => {
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
          src="images/img_claritycontractline.svg"
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
          src="images/img_materialsymbol_light_blue_500.svg"
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
          <Sidebar2 className="!sticky w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
        </div>
        <div className="bg-white-A700 flex flex-col font-montserrat justify-end p-10 md:px-5 w-[84%] md:w-full">
          <Text
            className="md:ml-[0] mt-[19px] mx-[482px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 text-center"
            size="txtMontserratRomanSemiBold32"
          >
            Trash
          </Text>
          <Text
            className="md:ml-[0] ml-[381px] mr-[378px] mt-[11px] text-base text-center text-gray-900_01"
            size="txtMontserratRomanRegular16"
          >
            File deletes permanently after 7 days{" "}
          </Text>
          <div className="flex md:flex-col flex-row gap-2 items-center justify-end md:ml-[0] ml-[957px] mr-3.5 mt-6 w-[8%] md:w-full">
            <Text
              className="text-base text-gray-900_03"
              size="txtMontserratRomanSemiBold16Gray90003"
            >
              Select
            </Text>
            <div className="border border-gray-500 border-solid h-6 rounded-sm w-6"></div>
          </div>
          <div className="flex flex-col items-center justify-start mt-6 mx-auto w-[98%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[18px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
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
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[269px] w-full">
            <div className="bg-red-A400 flex flex-col items-center justify-end p-[9px] rounded-lg">
              <Text
                className="text-base text-white-A700"
                size="txtMontserratRomanSemiBold16WhiteA700"
              >
                Delete{" "}
              </Text>
            </div>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center">
              Restore
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrashPage;
