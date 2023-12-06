import React, { useEffect, useState } from "react";
import { Button, Img, Input, Text } from "components";
import { useNavigate } from 'react-router-dom'
import { useAuth } from "contexts/AuthContext";
import { Toast } from 'primereact/toast';
import { Link } from "react-router-dom";

const SigninPage = () => {
  const { auth, login, toast } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      login(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (auth?.token) {
      navigate("/dashboard/finishes")
    }
  }, [auth?.token, navigate])

  return (
    <>
      <Toast ref={toast} id="toast" />
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-[38px] md:gap-10 gap-[71px] items-center mx-auto md:pr-2 sm:pr-5 pr-[71px] w-full main-container">
        <div className="h-[100vh] relative rounded-br-[100px] rounded-tr-[100px] w-[69%] md:w-full img-layout-container">
          <Img
            className="h-[100vh] m-auto rounded-br-[100px] rounded-tr-[100px] w-full img-layout"
            src="images/img_unsplashjvq0q5ikemm.png"
            alt="unsplashjvq0q5i"
          />
          <div className="absolute top-0 bg-blue_gray-900_90 flex flex-col inset-[0] items-start justify-center m-auto p-[27px] sm:px-5 rounded-br-[100px] rounded-tr-[100px] w-full logo-container">
          </div>
          <Img
            className="absolute h-[38px] w-[216px] top-[32px] left-[32px] logo cursor-pointer"
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-col font-montserrat items-center justify-start w-[26%] md:w-full ">
          <div className="sm-w-[219px] sm-h-[56px] text-center">
            <Text
              className="md:text-3xl sm:text-[20px] text-[32px] text-gray-900 text-center"
              size="txtMontserratRomanSemiBold32"
            >
              Welcome Back
            </Text>
            <Text
              className="mt-0 sm:mt-0 text-base text-center text-gray-900_01 sm:text-[14px]"
              size="txtMontserratRomanRegular16"
            >
              Access the Administraton page
            </Text>
          </div>
          <form onSubmit={handleSubmit} className="form-container sm:pt-0 sm:w-[269px] sm:h-[71px]">
            <div className="flex flex-col items-center justify-start mt-[31px] sm:mt-[8px] w-full ">
              <div className={`flex flex-col gap-1.5 items-start justify-start w-full`}>
                <Text
                  className="text-base text-gray-900_02 sm:text-[14px]"
                  size="txtMontserratRomanSemiBold16"
                >
                  Email
                </Text>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="custom-input w-full rounded border border-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={`flex flex-col gap-[5px] items-start justify-start mt-6 sm:mt-[8px] w-full`}>
                <Text
                  className="text-base text-gray-900_02 sm:text-[14px]"
                  size="txtMontserratRomanSemiBold16"
                >
                  Password
                </Text>
                <input
                  type="password"
                  placeholder="Password"
                  className="custom-input w-full rounded border border-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[29px] sm:gap-[16px] items-end justify-start mt-[6px] w-full">
                <Link to="/forgotpassword">
                  <Text size="txtMontserratRomanBold14" className="link sm:text-[12px]">Forgot password?</Text>
                </Link>
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[334px] sm:min-w-0 text-base text-center submit-button" type='submit'>
                  Access
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div >
    </>
  );
};

export default SigninPage;
