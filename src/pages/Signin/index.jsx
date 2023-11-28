import React from "react";

import { Button, Img, Input, Text } from "components";

const SigninPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-10 md:gap-10 gap-[71px] items-center mx-auto md:pr-10 sm:pr-5 pr-[71px] w-full">
        <div className="h-[768px] relative rotate-[180deg] rounded-bl-[100px] rounded-tl-[100px] w-[69%] md:w-full">
          <Img
            className="h-[768px] m-auto object-cover rounded-bl-[100px] rounded-tl-[100px] w-full"
            src="images/img_unsplashjvq0q5ikemm.png"
            alt="unsplashjvq0q5i"
          />
          <div className="absolute bg-blue_gray-900_90 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[27px] sm:px-5 rounded-bl-[100px] rounded-tl-[100px] w-full">
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
            Welcome Back
          </Text>
          <Text
            className="mt-4 text-base text-center text-gray-900_01"
            size="txtMontserratRomanRegular16"
          >
            Access the Administraton page{" "}
          </Text>
          <div className="flex flex-col items-center justify-start mt-[31px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtMontserratRomanSemiBold16"
              >
                Email{" "}
              </Text>
              <Input
                name="enteremailaddress"
                placeholder="Enter your email address"
                className="leading-[normal] p-0 placeholder:text-gray-900_a2 text-base text-left w-full"
                wrapClassName="border border-gray-500 border-solid w-full"
                type="email"
              ></Input>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start mt-6 w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtMontserratRomanSemiBold16"
              >
                Password
              </Text>
              <Input
                name="password_One"
                placeholder="Password"
                className="leading-[normal] p-0 placeholder:text-gray-900_a2 text-base text-left w-full"
                wrapClassName="border border-gray-500 border-solid w-full"
                type="password"
              ></Input>
            </div>
            <div className="flex flex-col gap-[29px] items-end justify-start mt-[9px] w-full">
              <a href="javascript:" className="text-blue-A700 text-sm">
                <Text size="txtMontserratRomanBold14">Forgot password?</Text>
              </a>
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[334px] text-base text-center">
                Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
