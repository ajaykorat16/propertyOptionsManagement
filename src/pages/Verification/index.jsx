import React from "react";

import { Button, Img, Text } from "components";

const VerificationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-orbitron items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-12 items-start justify-start md:px-5 w-[96%] md:w-full">
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
          <div className="flex flex-col font-montserrat md:gap-10 gap-[166px] justify-start md:mt-0 mt-[38px] w-[28%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
              <div className="flex flex-row gap-[11px] items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Text
                  className="text-base text-gray-900_02"
                  size="txtMontserratRomanSemiBold16"
                >
                  Back
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] w-[96%] md:w-full">
              <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtMontserratRomanSemiBold32"
                  >
                    Verification
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-center text-gray-900_01 w-full"
                    size="txtMontserratRomanRegular16"
                  >
                    Enter the 6-digit OTP code sent to sa*******@gmail.com{" "}
                  </Text>
                </div>
                <div className="flex flex-col gap-10 items-center justify-start w-[96%] md:w-full">
                  <Img
                    className="h-16"
                    src="images/img_frame11.svg"
                    alt="frameEleven"
                  />
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <Button className="cursor-pointer font-semibold leadi g-[normal] min-w-[334px] text-base text-center">
                      Access
                    </Button>
                    <Text
                      className="text-blue-A700 text-sm"
                      size="txtMontserratRomanBold14"
                    >
                      Resend code
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;
