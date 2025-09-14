import UnsecuredHeader from "@/components/custom-ui/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UnsecuredHeader />
      {children}
    </div>
  );
}

export default layout;
