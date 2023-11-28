import React from "react";

const sizeClasses = {
  txtMontserratRomanRegular16Gray90003: "font-montserrat font-normal",
  txtMontserratRomanBold14: "font-bold font-montserrat",
  txtOrbitronRegular24: "font-normal font-orbitron",
  txtOrbitronRegular36: "font-normal font-orbitron",
  txtMontserratRomanSemiBold40: "font-montserrat font-semibold",
  txtMontserratRomanRegular16WhiteA700: "font-montserrat font-normal",
  txtMontserratRomanSemiBold16WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanMedium14: "font-medium font-montserrat",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRomanSemiBold32: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold16Gray90003: "font-montserrat font-semibold",
  txtMontserratRomanMedium16Gray90003: "font-medium font-montserrat",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
