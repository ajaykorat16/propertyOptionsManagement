import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Menu
          menuItemStyles={{
            button: {
              padding: "6px 6px 6px 31px",
              gap: "18px",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "16px",
              fontFamily: "Montserrat",
              [`&:hover, &.ps-active`]: { color: "#ffffff90" },
            },
          }}
          className="flex flex-col items-center justify-end mb-[89px] md:pr-10 pr-12 sm:pr-5 pt-[30px] w-4/5"
        >
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 mb-[5rem] text-center" 
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text>
          <MenuItem
            icon={
              <Img
                className="h-[21px] w-[21px]"
                src="images/img_settings.svg"
                alt="settings"
              />
            }
          >
            <Text>Property</Text>
          </MenuItem>
          <Line className="bg-gray-500 h-[15vh] w-[2px] ml-[40px]" />
          <MenuItem
            icon={
              <Img
                className="h-[21px] w-[21px]"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            }
            // active={window.location.pathname === "/finishingpage"}
          >
            <Text>Finishing </Text>
          </MenuItem>
          <Line className="bg-gray-500 h-[15vh] w-[2px] ml-[40px]" />
          <MenuItem
            icon={
              <Img
                className="h-[21px] w-[21px]"
                src="images/img_contrast_blue_gray_100.svg"
                alt="contrast_One"
              />
            }
            active={window.location.pathname === "/signaturepage"}
          >
            <Text className="mt-0.5">Signature</Text>
          </MenuItem>
          <div className="flex flex-row items-center mt-[20rem] w-full">
            <Text
              className="text-base text-center text-white-A700 ml-[25px]"
              size="txtMontserratRomanSemiBold16WhiteA700"
            >
              ID 15056897
            </Text>
            <Img
              className="h-6 ml-[50px]"
              src="images/img_linemdlogout.svg"
              alt="linemdlogout"
            />
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
