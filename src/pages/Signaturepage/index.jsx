import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const SignaturepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="h-[768px] md:px-5 relative w-[17%] md:w-full">
          {/* <Text
            className="ml-[29px] mt-[27px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text> */}
          <Sidebar11 className="!sticky !w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
        </div>
        <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mb-0.5 p-[21px] md:px-5 w-[84%] md:w-full">
          <div className="flex flex-col gap-2 items-center justify-start mt-[26px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtMontserratRomanSemiBold32"
            >
              Signature
            </Text>
            <Text
              className="text-base text-center text-gray-900_01"
              size="txtMontserratRomanRegular16"
            >
              Input your Signature to seal your choices
            </Text>
          </div>
          <div className="border border-gray-500 border-solid flex flex-col font-orbitron justify-start mt-[34px] p-[7px] w-[38%] md:w-full">
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
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanMedium16"
                    >
                      Kitchen:{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[9px] text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
                    >
                      MARGRES PURE STONE LIGHT GREY
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtMontserratRomanMedium16"
                    >
                      Bathroom:{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[9px] text-base text-gray-900_01"
                      size="txtMontserratRomanRegular16"
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
          <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] mt-10 text-base text-center">
            Process
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignaturepagePage;
