// top header with logo at left side and login/signup button at right side

import Image from "next/image";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

function UnsecuredHeader() {
  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-background px-4 shadow-md">
      <Image
        src="/white-logo.jpg"
        alt="Yinkcity Logo"
        width={50}
        height={50}
        className="object-contain rounded-full size-10 bg-background"
      />
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default UnsecuredHeader;
