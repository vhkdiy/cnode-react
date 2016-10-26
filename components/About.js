import React from "react";
import { render } from "react-dom";
import Sidebar from "./Sidebar";
import { Links, QRcode, LoginPanel } from "./SidebarBox";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 content">
          <div className="left_content__header">
            <ul className="breadcrumb">
              <li><a href="#">主页</a></li>
              <li className="active">关于</li>
            </ul>
          </div> {/* left_content__header */}

          <div className="inner_content">
            <h3 className="inner_content__title inner__title--first">关于</h3>
            <p className="inner_content__info">基于 React+Redux+Bootstrap 的Cnode案例</p>
            <h3 className="inner_content__title">移动客户端</h3>
            <p className="inner_content__info">用JavaScript做的APP。</p>
            <p className="inner_content__info">源码地址：<a href="https://github.com/vhkdiy" className="inner_content__link">https://github.com/vhkdiy</a></p>
            <h3 className="inner_content__title">友情链接</h3>
            <a href="http://bbs.qcloud.com/">
              <img className="about_links" src="http://dn-cnode.qbox.me/FslHzNc-w369LXfPwzOVowJGLMsW" alt=""/>
            </a>
            <a href="http://segmentfault.com/">
              <img className="about_links" src="http://o4j806krb.qnssl.com/public/images/temp/sf.png" alt=""/>
            </a>
          </div> {/* inner_content */}

        </div> {/* col-md-9 content */}

        <Sidebar>
          {LoginPanel}
          {Links}
          {QRcode}
        </Sidebar>
      </div>
    </div>
  );
}

export default About;