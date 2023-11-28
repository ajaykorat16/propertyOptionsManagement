import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar11 = (props) => {
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
              padding: 0,
              marginTop: "7px",
              paddingBottom: "31px",
              gap: "18px",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "16px",
              fontFamily: "Montserrat",
              paddingLeft: "31px",
              paddingRight: "31px",
            },
          }}
          className="flex flex-col items-center justify-start mb-[31px] mt-6 md:pr-10 pr-12 sm:pr-5 w-4/5"
        >
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text>
          <MenuItem
            icon={
              <Img
                className="h-[21px] mb-[84px] w-[21px]"
                src="images/img_settings.svg"
                alt="settings"
              />
            }
          >
            <Text>Property</Text>
          </MenuItem>
          <MenuItem
            icon={
              <Img
                className="h-[21px] mb-[84px] w-[21px]"
                src="images/img_settings.svg"
                alt="settings_One"
              />
            }
            active={window.location.pathname === "/finishingpage"}
          >
            <Text>Finishing </Text>
          </MenuItem>
          <Line className="bg-gray-500 h-[15vh] w-[2px] ml-[40px]" />
          <MenuItem
            icon={
              <Img
                className="h-[21px] mb-[84px] w-[21px]"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            }
            active={window.location.pathname === "/signaturepage"}
          >
            <Text className="mt-0.5">Signature</Text>
          </MenuItem>
          <Line className="bg-gray-500 h-[15vh] w-[2px] ml-[40px]" />
          <div className="flex flex-row items-center justify-start mt-[169px] w-full">
            <Text
              className="text-base text-center text-white-A700"
              size="txtMontserratRomanSemiBold16WhiteA700"
            >
              ID 15056897
            </Text>
            <Img
              className="h-6"
              src="images/img_linemdlogout.svg"
              alt="linemdlogout"
            />
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
