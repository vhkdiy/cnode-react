import React from "react";
import { Link } from "react-router";

function Header() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
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
                  <Link to="/">首页</Link>
                </li>
                <li>
                  <Link to="/getstart">新手入门</Link>
                </li>
                <li>
                  <Link to="/about">关于</Link>
                </li>
                <li>
                  <a href="#">注册</a>
                </li>
                <li>
                  <Link to="/login">登陆</Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </nav>
    );
}

export default Header;