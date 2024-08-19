import React from "react";

function GalaryLayout({ modal, children }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

export default GalaryLayout;
