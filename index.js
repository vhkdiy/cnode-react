import "bootstrap/dist/css/bootstrap.css";
import "style.css";
// import "normalize";

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


function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 content">
          <ul className="nav nav-pills content__header">
            <li className="active">
              <a href="#">全部</a>
            </li>
            <li>
              <a href="#">精华</a>
            </li>
            <li>
              <a href="#">分享</a>
            </li>
            <li>
              <a href="#">问答</a>
            </li>
            <li>
              <a href="#">招聘</a>
            </li>
          </ul>
          <div className="content__topic_list">
            <div className="topic_list__cell">
              <a href="#" className="pull-left">
                <img className="user__img" src="http://gravatar.com/avatar/d00d8e3461257418a62b1cb7abeea85a?size=48" alt="" />
              </a>
              <span className="reply_count pull-left">
                <span className="count_of_replies">4</span>
                <span className="count_seperator">/</span>
                <span className="count_of_visits">386</span>
              </span>

              <a href="#" className="last_time pull-right">
                <img className="user__small_img" src="http://gravatar.com/avatar/d24fc5b1c6b84dae95dd23ba1c7ebbcb?size=48" alt="" />
                <span className="last_active_time">15 小时前</span>
              </a>

              <div className="topic_title_wrapper">
                <span className="topic__put_top">置顶</span>
                <a className="topic_title" href="#">第二届 杭州 Node Party 总结</a>
              </div>

            </div>

            <div>
              <ul className="pagination">
                <li><a href="#">&laquo;</a></li>
                <li className="active disabled"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a>...</a></li>
                <li><a href="#">&raquo;</a></li>
              </ul>
            </div> {/* 分页 */}

          </div>
        </div> {/* col-md-9 content */}

        <Sidebar/>

      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="col-md-3 sidebar">
      <div className="sidebar__panel sidebar__panel__login">
        <p className="sidebar__panel__login_title">CNode：Node.js专业中文社区</p>
        <div>您可以 <a href="#">登陆 </a>或 <a href="#">注册</a>, 也可以<a href="#"><span className="sidebar__panel__github_login">通过 GitHub 登录</span></a></div>
      </div> {/* 登陆模块 */}

      <div className="sidebar__panel">
        <div className="sidebar__panel__header">
          <span className="sidebar__panel__header_span">无人回复的话题</span>
        </div>
        <div className="sidebar__panel__inner">
          <a href="#" className="sidebar__title">怎么在server 2008上部署管理node环境node环境</a>
          <a href="#" className="sidebar__title">怎么在server 2008上部署管理node环境node环境</a>
          <a href="#" className="sidebar__title">怎么在server 2008上部署管理node环境node环境</a>
          <a href="#" className="sidebar__title">怎么在server 2008上部署管理node环境node环境</a>
          <a href="#" className="sidebar__title">怎么在server 2008上部署管理node环境node环境</a>
        </div>
      </div> {/* 话题回复模块 */}

      <div className="sidebar__panel">
        <div className="sidebar__panel__header">
          <span className="sidebar__panel__header_span">
            积分榜 &nbsp;&nbsp;
              </span>
          <a href="#" className="ranking__link">TOP 100 >></a>
        </div>
        <div className="sidebar__panel__inner">
          <ol className="inner__ranking__list">
            <li>
              <span className="ranking__score">14855</span>
              <a href="#" className="ranking__user_name">i5ting</a>
            </li>
            <li>
              <span className="ranking__score">13595</span>
              <a href="#" className="ranking__user_name">alsotang</a>
            </li>
            <li>
              <span className="ranking__score">9285</span>
              <a href="#" className="ranking__user_name">leapon</a>
            </li>
          </ol>
        </div>
      </div> {/* 积分榜 */}

      <div className="sidebar__panel">
        <div className="sidebar__panel__header">
          <span className="sidebar__panel__header_span">友情社区</span>
        </div>
        <div className="sidebar__panel__inner">
          <a href="#">
            <img className="inner__links__img" src="http://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" alt="" />
          </a>
          <a href="#">
            <img className="inner__links__img" src="http://o4j806krb.qnssl.com/public/images/golangtc-logo.png" alt="" />
          </a>
        </div>
      </div> {/* 友情链接模块 */}

      <div className="sidebar__panel">
        <div className="sidebar__panel__header">
          <span className="sidebar__panel__header_span">客户端二维码</span>
        </div>

        <div className="sidebar__panel__inner qrcode--center">
          <img src="http://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" className="inner__qrcode" />
          <br />
          <a href="https://github.com/soliury/noder-react-native" target="_blank" className="source_address">客户端源码地址</a>
        </div>
      </div>

    </div> {/* col-md-3 sidebar */}
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__links">
          <a href="#" className="footer__links__a">RSS</a>
          <span> | </span>
          <a href="#" className="footer__links__a">源码地址</a>
        </div>

        <div className="footer__info">
          <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        </div>
      </div>
    </div>
  );
}

const { Component } = React;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}


render(<App />, document.querySelector("#root"));