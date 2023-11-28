import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const FinishingpagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron items-center w-full">
        <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
          {/* <Text
            className="ml-[29px] mt-[27px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text> */}
          <Sidebar1 className="!sticky w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
        </div>
        <div className="bg-white-A700 flex flex-col font-montserrat gap-[49px] items-center justify-start p-[49px] md:px-5 w-[84%] md:w-full">
          <div className="flex flex-col gap-2 items-center justify-start">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtMontserratRomanSemiBold32"
            >
              Properties
            </Text>
            <Text
              className="text-base text-center text-gray-900_01"
              size="txtMontserratRomanRegular16"
            >
              Select a Property to choose a finishing options for your space
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center mb-[390px] w-[53%]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-3 items-center justify-start w-full">
              <Img
                className="h-[97px] w-[97px]"
                src="images/img_gameiconshouse.svg"
                alt="gameiconshouse"
              />
              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                <Text
                  className="text-base text-gray-900_03"
                  size="txtMontserratRomanSemiBold16Gray90003"
                >
                  Property name
                </Text>
                <Text
                  className="text-base text-gray-900_03"
                  size="txtMontserratRomanRegular16Gray90003"
                >
                  264 Royal Ln. Mesa, New Jersey
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-start w-full">
              <Img
                className="h-[97px] w-[97px]"
                src="images/img_gameiconshouse.svg"
                alt="gameiconshouse"
              />
              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                <Text
                  className="text-base text-gray-900_03"
                  size="txtMontserratRomanSemiBold16Gray90003"
                >
                  Property name
                </Text>
                <Text
                  className="text-base text-gray-900_03"
                  size="txtMontserratRomanRegular16Gray90003"
                >
                  264 Royal Ln. Mesa, New Jersey
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default FinishingpagePage;
