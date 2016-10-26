import React from "react";
import { render } from "react-dom";
import Sidebar from "./Sidebar";
import { About } from "./SidebarBox";

function Login() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-9 content">
          <div className="left_content__header">
            <ul className="breadcrumb">
              <li><a href="#">主页</a></li>
              <li className="active">登陆</li>
            </ul>
          </div> {/* left_content__header */}

          <div className="inner_content">
            <form action="" method="post" className="login_form">
              <div className="login__group">
                <label htmlFor="name" className="login__group__label">用户名</label>
                <input className="form-control login__group__input" type="text" size="30" />
              </div>
              <div className="login__group">
                <label htmlFor="pass" className="login__group__label">密码</label>
                <input className="form-control login__group__input" type="text" size="30" />
              </div>
              <div className="login__form-actions">
                <button className="btn btn-primary" type="submit">登陆</button>
                <a href="#"><span className="btn btn-info login__info-span">通过 GitHub 登录</span></a>
                <a href="#" className="login__forgot_password">忘记密码了?</a>
              </div>
            </form>
          </div> {/* inner_content */}
        </div> {/* col-md-9 content */}
        
        <Sidebar>
          {About}
        </Sidebar>
      </div>
    </div>
  );
}

export default Login;