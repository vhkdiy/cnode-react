import React from "react";
import { render } from "react-dom";

function Header() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a href="#">
              <img className="navbar-brand" src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="responsive-navbar">
            <form action="" className="navbar-form navbar-left">
              <input type="text" placeholder="search" className="form-control navbar-search" />
            </form>

            <div className="navbar-right">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">首页</a>
                </li>
                <li>
                  <a href="#">新手入门</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">关于</a>
                </li>
                <li>
                  <a href="#">注册</a>
                </li>
                <li>
                  <a href="#">登陆</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </nav>
    );
}

export default Header;