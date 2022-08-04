import React from "react";
import Header from "./Header";


function Layout(props) {
  return (
    <div className="layout">
      <Header></Header>
      <main>{props.children}</main>
      
    </div>
  );
}

export default Layout;