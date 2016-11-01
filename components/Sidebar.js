import React from "react";

function Sidebar({ children }) {
  return (
    <div className="col-md-3 sidebar">
      {children}
    </div>
  );
}

export default Sidebar;