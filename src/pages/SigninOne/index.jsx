import React from "react";

import { Button, Img, Input, Text } from "components";

const SigninOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-10 md:gap-10 gap-16 items-center mx-auto md:pr-10 pr-16 sm:pr-5 w-full">
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
        <div className="flex flex-col font-montserrat justify-start w-[27%] md:w-full">
          <Text
            className="md:ml-[0] ml-[107px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
            size="txtMontserratRomanSemiBold32"
          >
            Sign In
          </Text>
          <Text
            className="leading-[24.00px] mt-2.5 text-base text-center text-gray-900_01 w-full"
            size="txtMontserratRomanRegular16"
          >
            An OTP Verification code will be sent to the email address
            associated with your National ID Number.{" "}
          </Text>
          <div className="flex flex-col gap-10 items-center justify-start md:ml-[0] ml-[7px] mt-[39px] w-[96%] md:w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtMontserratRomanSemiBold16"
              >
                National ID Number
              </Text>
              <Input
                name="input"
                placeholder="Input your id number"
                className="leading-[normal] p-0 placeholder:text-gray-900_a2 text-base text-left w-full"
                wrapClassName="border border-gray-500 border-solid w-full"
                type="number"
              ></Input>
            </div>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[334px] text-base text-center">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninOnePage;
