import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const ContractfullviewPage = () => {
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
        <div className="h-[768px] md:px-5 relative w-[17%] md:w-full">
          <Text
            className="ml-[29px] mt-[27px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text>
          <Sidebar2 className="!sticky !w-[232px] bg-gray-900_03 flex h-screen md:hidden inset-[0] justify-center m-auto overflow-auto top-[0]" />
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[71px] items-center justify-end p-10 md:px-5 w-[84%] md:w-full">
          <div className="border border-gray-500 border-solid flex flex-col justify-start mt-[63px] p-[7px] w-[39%] md:w-full">
            <Text
              className="md:ml-[0] ml-[157px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
              size="txtOrbitronRegular24"
            >
              LOGO
            </Text>
            <div className="flex flex-col font-montserrat gap-[9px] items-start justify-start mt-8 mx-auto w-[82%] md:w-full">
              <Text
                className="text-base text-gray-900_03"
                size="txtMontserratRomanSemiBold16Gray90003"
              >
                Property name
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="text-base text-gray-900_03"
                    size="txtMontserratRomanSemiBold16Gray90003"
                  >
                    Location:
                  </Text>
                  <Text
                    className="text-base text-gray-900_03"
                    size="txtMontserratRomanRegular16Gray90003"
                  >
                    264 Royal Ln. Mesa, New Jersey
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mt-[19px]">
                  <Text
                    className="text-base text-gray-900_03"
                    size="txtMontserratRomanSemiBold16Gray90003"
                  >
                    Description:
                  </Text>
                  <Text
                    className="mt-1 text-base text-gray-900_03"
                    size="txtMontserratRomanRegular16Gray90003"
                  >
                    4 Bedroom, 1 Sitting room, 2 Bathroom
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-[26px] w-full">
                  <Text
                    className="text-base text-gray-900_03"
                    size="txtMontserratRomanSemiBold16Gray90003"
                  >
                    Selected choice
                  </Text>
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <Text
                      className="text-base text-gray-900_03"
                      size="txtMontserratRomanMedium16Gray90003"
                    >
                      Kitchen:{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[9px] text-base text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      MARGRES PURE STONE LIGHT GREY
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <Text
                      className="text-base text-gray-900_03"
                      size="txtMontserratRomanMedium16Gray90003"
                    >
                      Bathroom:{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[9px] text-base text-gray-900_03"
                      size="txtMontserratRomanRegular16Gray90003"
                    >
                      MARGRES PURE STONE LIGHT GREY
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[87px] md:h-auto md:ml-[0] ml-[250px] mt-[37px] object-cover w-[35%] sm:w-full"
              src="images/img_image3.png"
              alt="imageThree"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-montserrat md:gap-10 items-center justify-between w-full">
            <div className="bg-light_blue-500 flex flex-col items-center justify-end p-[9px] rounded-lg">
              <Text
                className="text-base text-white-A700"
                size="txtMontserratRomanSemiBold16WhiteA700"
              >
                Move to Trash
              </Text>
            </div>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center">
              Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractfullviewPage;
