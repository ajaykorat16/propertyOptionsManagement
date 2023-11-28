import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const FinishespagePage = () => {
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
        <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start p-10 md:px-5 w-[84%] md:w-full">
          <div className="flex flex-col justify-start mb-[159px] mt-[18px] w-full">
            <Text
              className="md:ml-[0] ml-[459px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
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
                  Category
                </Text>
                <div className="bg-white-A700 border border-gray-500_7f border-solid flex flex-row items-center justify-between p-2 rounded-lg shadow-bs w-[71%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900_01"
                    size="txtMontserratRomanRegular16"
                  >
                    All
                  </Text>
                  <div className="flex flex-col h-6 items-center justify-start mr-4 p-[7px] w-6">
                    <Img
                      className="h-[5px] my-0.5"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                  </div>
                </div>
              </div>
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center">
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
                  </div>
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-between w-[33%] md:w-full">
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
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
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
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinishespagePage;
