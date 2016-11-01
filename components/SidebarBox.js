import React from "react";
import SidebarPanel from "./SidebarPanel";
import asyncGetData from "../store";
import { Link } from "react-router";

const LoginPanel = (
  <div className="sidebar__panel sidebar__panel__login">
    <p className="sidebar__panel__login_title">CNode：Node.js专业中文社区</p>
    <div>您可以 <a href="#">登陆 </a>或 <a href="#">注册</a>, 也可以<a href="#"><span className="sidebar__panel__github_login">通过 GitHub 登录</span></a></div>
  </div>
)

const Ranking = (
  <SidebarPanel title="积分榜 &nbsp;&nbsp;" titleLink="TOP 100 >>">
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
  </SidebarPanel>
)

const Links = (
  <SidebarPanel title="友情社区">
    <a href="#">
      <img className="inner__links__img" src="http://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" alt="" />
    </a>
    <a href="#">
      <img className="inner__links__img" src="http://o4j806krb.qnssl.com/public/images/golangtc-logo.png" alt="" />
    </a>
  </SidebarPanel>
)

const QRcode = (
  <SidebarPanel title="客户端二维码" isQR={true}>
    <img src="http://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" className="inner__qrcode" />
    <br />
    <a href="https://github.com/soliury/noder-react-native" target="_blank" className="source_address">客户端源码地址</a>
  </SidebarPanel>
)

const About = (
  <SidebarPanel title="关于">
    <p>CNode：Node.js专业中文社区</p>
    <p>在这里你可以：</p>
    <ul className="about__panel">
      <li>向别人提出你遇到的问题</li>
      <li>帮助遇到问题的人</li>
      <li>分享自己的知识</li>
      <li>和其它人一起进步</li>
    </ul>
  </SidebarPanel>
)

function Author({userdata}) {
  const { avatar_url, loginname, score, recent_topics } = userdata;
  return (
    <SidebarPanel title="作者">
      <div className="sidebar__user__card">
        <a href="#" className="sidebar__user__avatar">
          <img className="sidebar__user__avatar__img" src={avatar_url} alt="" />
        </a>
        <span className="sidebar__user__name">
          <a className="sidebar__user__name--color" href="#">{loginname}</a>
        </span>
        <p className="sidebar__user__ranking">积分: {score}</p>
      </div>
    </SidebarPanel>
  );
}

function OtherTopics({topics, currentid}) {
  const { recent_topics } = topics;
  return (
    <SidebarPanel title="作者其它话题" >
      {recent_topics.filter(topic => topic.id !== currentid).slice(0, 5).map((tp, i) => <Link to={`/topic/${tp.id}`} key={i} className="sidebar__title">{tp.title}</Link>)}
    </SidebarPanel>
  );
}

function NoReplyTopics({topicList}) {
  return (
    <SidebarPanel title="无人回复的话题" >
      {topicList.filter(topic => topic.reply_count === 0).slice(0, 5).map((tp, i) => <Link to={`/topic/${tp.id}`} key={i} className="sidebar__title">{tp.title}</Link>)}
    </SidebarPanel>
  );
}

export { Links, QRcode, Ranking, LoginPanel, About, Author, OtherTopics, NoReplyTopics }