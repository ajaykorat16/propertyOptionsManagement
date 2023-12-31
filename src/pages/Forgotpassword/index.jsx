import React, { useState } from "react";
import { Button, Img, Input, Text } from "components";
import { useAuth } from "contexts/AuthContext";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const ForgotpasswordPage = () => {
  const { logout, toast, forgotPassword } = useAuth()

  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await forgotPassword(email)
      if (!data.error) {
        logout()
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Toast ref={toast} id="toast" />
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-10 md:gap-10 gap-16 items-center mx-auto md:pr-2 pr-16 w-full main-container">
        <div className="h-[100vh] relative rounded-br-[100px] rounded-tr-[100px] w-[69%] md:w-full img-layout-container">
          <Img
            className="h-[100vh] m-auto rounded-br-[100px] rounded-tr-[100px] w-full img-layout"
            src="images/img_unsplashjvq0q5ikemm.png"
            alt="unsplashjvq0q5i"
          />
          <div className="absolute top-0 bg-blue_gray-900_90 flex flex-col inset-[0] items-start justify-center m-auto p-[27px] sm:px-5 rounded-br-[100px] rounded-tr-[100px] w-full logo-container">
          </div>
          <Img
            onClick={() => navigate('/')}
            className="cursor-pointer absolute h-[38px] w-[216px] top-[32px] left-[32px] logo"
            src="/images/logo.png"
            alt="logo"
          />
          <div className="absolute flex flex-row back-button cursor-pointer ml-[46px]" onClick={() => navigate('/')}>
            <Icon icon="akar-icons:arrow-back" className="back-icon w-[20px] h-[20px]" />
            <Text
              className="text-base text-gray-900 ml-[11px] back-button-text"
              size="txtMontserratRomanSemiBold32"
            >
              Back
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-center justify-start w-[27%] md:w-full cursor-pointer forgot-password-body sm:w-[312px] sm:h-[205px]">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 title"
            size="txtMontserratRomanSemiBold32"
          >
            Forgot Password
          </Text>
          <Text
            className="leading-[24.00px] mt-[9px] text-base text-center text-gray-900_01 w-full sm:text-[14px]"
            size="txtMontserratRomanRegular16"
          >
            No worries a reset instructions will be sent to your email address
          </Text>
          <form onSubmit={handleSubmit} className="forgot-password-form-container">
            <div className="flex flex-col gap-8 items-center justify-start mt-[24px] w-full forgot-password-container">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900_02 email sm:text-[14px]"
                  size="txtMontserratRomanSemiBold16"
                >
                  Email
                </Text>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="custom-input w-full rounded border border-gray-500 min-w-[338px] sm:min-w-[0px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center justify-start  submit-button">
                <Button className="cursor-pointer font-semibold leading-[normal]  min-w-[338px] text-base text-center sm:min-w-[0px] w-full submit-button reset-button" type='submit'>
                  Reset password
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotpasswordPage;
