// import "./styles.css";
import React from "react";
function Layout({ modal, children }) {
  return (
    <>

    
    {/* <h1>head  </h1> */}
    
      {modal}
      {children}
    
    </>
  );
}
export default Layout;
