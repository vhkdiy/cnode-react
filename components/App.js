import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
// import Login from "./Login";

function App({children, location}) {
  return (
    <div>
      <Header />
        {children}
      <Footer location={location} />
    </div>
  );
}

export default App;