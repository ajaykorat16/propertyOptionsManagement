import React from "react";
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Img, Text } from "components";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { Avatar } from "primereact/avatar";
import { Icon } from '@iconify/react';

const Sidebar2 = (props) => {
  const navigate = useNavigate();
  const { logout, auth } = useAuth()

  const handleLogout = () => {
    try {
      logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const sideBarMenu = [
    {
      icon: (
        <Icon icon="fluent-mdl2:product-catalog" height={20} width={20}/>
      ),
      label: "Finishes",
      to: "/dashboard/finishes",
      active: window.location.pathname === "/dashboard/finishes",
    },
    {
      icon: (
        <Icon icon="clarity:contract-line" height={20} width={20} />
      ),
      label: "Contracts",
      to: "/dashboard/contracts",
      active: window.location.pathname === "/dashboard/contracts",
    },
    {
      icon: (
        <Icon icon="material-symbols:delete-outline" height={20} width={20} />
      ),
      label: "Trash",
      to: "/dashboard/trash",
      active: window.location.pathname === "/dashboard/trash",
    },
  ];

  return (
    <>
      <Sidebar
        className={props.className}
        style={{ position: "fixed", top: 0, left: 0, height: "100%" }}
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
            <Link to={menu.to} key={`sideBarMenuItem${i}`}>
              <MenuItem className="hover:text-white" {...menu}>{menu.label}</MenuItem>
            </Link>
          ))}
        </Menu>
        <div className="mt-[141px] overflow-x-auto w-full">
          <div className="h-[100%] relative w-full">
            <Img
              className="h-[462px] ml-auto my-auto object-cover"
              src="/images/img_clippathgroup.png"
              alt="clippathgroup"
            />
            <div className="fixed bottom-5 left-5 flex flex-row gap-3 items-center w-4/5">
              <Avatar icon="pi pi-user" size="large" shape="circle" className="h-8 w-8 rounded-full" />
              <div className="flex flex-row items-center w-[18%] cursor-pointer" onClick={handleLogout}>
                <span className="text-base text-white-A700 text-[15px]">{auth.user?.fullName}</span>
                <img
                  className="h-6 w-6 ml-[12%]"
                  src="/images/img_linemdlogout.svg"
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
