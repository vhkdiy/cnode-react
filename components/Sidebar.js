import React from "react";
import { render } from "react-dom";

function Sidebar({ children }) {
  return (
    <div className="col-md-3 sidebar">
      {children}
    </div>
  );
}

export default Sidebar;