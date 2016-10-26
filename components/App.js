import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
// import Login from "./Login";

function App({children}) {
  return (
    <div>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
}

export default App;