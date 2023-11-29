import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar2 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_thumbsup.svg" alt="thumbsup" />
      ),
      label: "Finishes",
      href: "/",
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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 mb-[2rem] text-center mt-10"
          size="txtOrbitronRegular36"
        >
          LOGO
        </Text>
        <Menu
          menuItemStyles={{
            button: {
              padding: "9px 9px 9px 16px",
              gap: "14px",
              borderColor: "transparent",
              borderWidth: "1px",
              borderStyle: "solid",
              marginTop: "34px",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "16px",
              fontFamily: "Montserrat",
              borderRadius: "8px",
              [`&:hover, &.ps-active`]: {
                color: "#0d99ff",
                borderColor: "#a5a5a54c",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[450px] pt-[9px] px-[7px] w-[94%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <div className="mt-[141px] overflow-x-auto w-full">
          <div className="h-[556px] relative w-full">
            <Img
              className="h-[462px] ml-auto my-auto object-cover"
              src="images/img_clippathgroup.png"
              alt="clippathgroup"
            />
            <div className="absolute bottom-[5%] flex flex-row gap-[11px] inset-x-[0] items-start justify-between mx-auto w-[87%]">
              <Img
                className="h-8 md:h-auto rounded-[50%] w-8"
                src="images/img_ellipse4.png"
                alt="ellipseFour"
              />
              <div className="flex flex-row items-start justify-between mt-[3px] w-[79%]">
                <Text
                  className="mt-[3px] text-base text-white-A700"
                  size="txtMontserratRomanSemiBold16WhiteA700"
                >
                  Harry123
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_linemdlogout.svg"
                  alt="linemdlogout"
                />
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
