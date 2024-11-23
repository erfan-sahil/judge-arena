import { Open_Sans } from "next/font/google";
import React from "react";

const openSans = Open_Sans({
  weight: ["400", "300", "500"],
  style: ["normal"],
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={`${openSans.className}  antialiased`}>{children}</div>;
};

export default layout;
