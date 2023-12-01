import React, { useEffect, useState } from "react";
import { Button, Img, Input, Text } from "components";
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from "contexts/AuthContext";
import { Toast } from 'primereact/toast';
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {

  const { logout, toast, resetPassword } = useAuth()
  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [token, settoken] = useState("");
  const navigate = useNavigate()
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (password !== confirmPassword) {
        toast.current.show({ severity: 'error', summary: 'Password', detail: "Password and Confirm Password must be same", life: 3000 })
      } else {
        const data = await resetPassword(password, token)
        if (!data.error) {
          logout()
          navigate("/Signin")
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    settoken(token)
  }, [location.search]);

  return (
    <>
      <Toast ref={toast} />
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-10 md:gap-10 gap-[71px] items-center mx-auto md:pr-10 sm:pr-5 pr-[71px] w-full">
        <div className="h-[100vh] relative rounded-br-[100px] rounded-tr-[100px] w-[69%] md:w-full">
          <Img
            className="h-[100vh] m-auto rounded-br-[100px] rounded-tr-[100px] w-full"
            src="images/img_unsplashjvq0q5ikemm.png"
            alt="unsplashjvq0q5i"
          />
          <div className="absolute bg-blue_gray-900_90 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[27px] sm:px-5 rounded-br-[100px] rounded-tr-[100px] w-full">
            <Text
              className="mb-[667px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtOrbitronRegular36"
            >
              LOGO
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-center justify-start w-[26%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
            size="txtMontserratRomanSemiBold32"
          >
            Reset Password
          </Text>
          <Text
            className="mt-4 text-base text-center text-gray-900_01"
            size="txtMontserratRomanRegular16"
          >
            Access the Administraton page{" "}
          </Text>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-start mt-[31px] w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900_02"
                  size="txtMontserratRomanSemiBold16"
                >
                  New Password
                </Text>
                <Input
                  placeholder="Password"
                  className="leading-[normal] p-0 placeholder:text-gray-900_a2 text-base text-left w-full"
                  wrapClassName="border border-gray-500 border-solid w-full"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e)}
                />
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start mt-6 w-full">
                <Text
                  className="text-base text-gray-900_02"
                  size="txtMontserratRomanSemiBold16"
                >
                  Confirm Password
                </Text>
                <Input
                  placeholder="Password"
                  className="leading-[normal] p-0 placeholder:text-gray-900_a2 text-base text-left w-full"
                  wrapClassName="border border-gray-500 border-solid w-full"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e)}
                />
              </div>
              <div className="flex flex-col gap-[29px] items-end justify-start mt-[9px] w-full">
                <Link to="/forgotpassword">
                  <Text size="txtMontserratRomanBold14">Forgot password?</Text>
                </Link>
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[334px] text-base text-center" type='submit'>
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

export default ResetPasswordPage;