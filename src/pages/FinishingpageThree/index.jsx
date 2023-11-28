import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const bathroomOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FinishingpageThreePage = () => {
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
          <Sidebar1 className="!sticky w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
        </div>
        <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end p-9 md:px-5 w-[84%] md:w-full">
          <div className="flex flex-col gap-[49px] items-center justify-start mt-[13px] w-full">
            <div className="flex flex-col gap-2 justify-start">
              <Text
                className="md:ml-[0] ml-[68px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtMontserratRomanSemiBold32"
              >
                Finishing
              </Text>
              <Text
                className="text-base text-center text-gray-900_01"
                size="txtMontserratRomanRegular16"
              >
                Select a finishing option for your space
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[189px] items-start justify-start w-[49%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="h-[169px] w-[169px]"
                    src="images/img_gameiconshouse.svg"
                    alt="gameiconshouse"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start sm:mt-0 mt-1">
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
                      <div className="flex flex-col items-center justify-start mt-[19px]">
                        <Text
                          className="text-base text-gray-900_03"
                          size="txtMontserratRomanSemiBold16Gray90003"
                        >
                          Description:
                        </Text>
                      </div>
                      <Text
                        className="mt-1 text-base text-gray-900_03"
                        size="txtMontserratRomanRegular16Gray90003"
                      >
                        4 Bedroom, 1 Sitting room, 2 Bathroom
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-start mt-[41px] w-full">
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
                </div>
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center">
                  Signature
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[42px] items-center justify-start ml-4 md:ml-[0] w-[2%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_materialsymbol.svg"
                  alt="materialsymbol"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_materialsymbol.svg"
                  alt="materialsymbol_One"
                />
              </div>
              <div className="flex md:flex-1 flex-col gap-3 justify-start md:ml-[0] ml-[205px] md:mt-0 mt-[3px] w-[30%] md:w-full">
                <Text
                  className="ml-2 md:ml-[0] text-base text-gray-900_03"
                  size="txtMontserratRomanSemiBold16Gray90003"
                >
                  Select space:
                </Text>
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <SelectBox
                    className="border border-gray-500_7f border-solid text-base text-left w-full"
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
                    options={bathroomOptionsList}
                    isSearchable={false}
                    placeholder="Bathroom"
                    color="white_A700"
                  />
                  <div className="border border-gray-500 border-solid flex flex-col gap-[9px] items-start justify-center p-1.5 rounded w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-between mt-[34px] w-full">
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
                    <div className="flex flex-col gap-[7px] items-center justify-start mb-[137px] w-[49%] md:w-full">
                      <Img
                        className="h-[89px] md:h-auto object-cover w-[89px]"
                        src="images/img_image9.png"
                        alt="imageNine"
                      />
                      <Text
                        className="leading-[22.00px] text-center text-gray-900_03 text-sm w-full"
                        size="txtMontserratRomanRegular14"
                      >
                        ALELUIA STONE AGE WHITE
                      </Text>
                    </div>
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

export default FinishingpageThreePage;
