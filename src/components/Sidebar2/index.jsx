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
        <Icon icon="fluent-mdl2:product-catalog" height={20} width={20} />
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
        <Img
          onClick={() => navigate('/dashboard/finishes')}
          className="cursor-pointer h-[24px] w-[135px] mt-[24px] ml-[24px]"
          src="/images/logo.png"
          alt="logo"
        />
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
          <div className="h-[100%] w-full">
            <Img
              className="fixed bottom-5 left-0 ml-auto my-auto object-cover fixed bottom-5 z-[-1]"
              src="/images/g382.png"
              alt="clippathgroup"
            />
            <div className="fixed bottom-5 left-5 flex flex-row gap-3 items-center ">
              <Avatar icon="pi pi-user" size="large" shape="circle" className="h-8 w-8 rounded-full" />
              <span className="text-base text-white-A700 text-[15px] user-name">{auth.user?.fullName}</span>
              <div className="flex flex-row items-center cursor-pointer" onClick={handleLogout}>
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
