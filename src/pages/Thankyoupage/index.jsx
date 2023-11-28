import React from "react";

import { Text } from "components";

const ThankyoupagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-[100%]]">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[100vh] items-center justify-start w-full"
          style={{ backgroundImage: "url('images/img_frame7.png')" }}
        >
          <div className="bg-blue_gray-900_a2 flex flex-col items-center h-[100vh] justify-start p-[27px] sm:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtOrbitronRegular36"
            >
              LOGO
            </Text>
            <Text
              className="mt-[286px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtMontserratRomanSemiBold40"
            >
              Thank You
            </Text>
            <Text
              className="mb-[293px] mt-[18px] text-base text-center text-white-A700"
              size="txtMontserratRomanRegular16WhiteA700"
            >
              We ensure to deliver the best
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyoupagePage;
