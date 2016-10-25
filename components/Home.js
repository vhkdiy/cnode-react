import React from "react";
import { render } from "react-dom";
import TopicListItem from "./Topiclistitem";
import Sidebar from "./Sidebar";
import SidebarPanel from "./SidebarPanel";
import GetStart from "./GetStart";
import Login from "./Login";
import asyncGetData from "../store";

function TopicList({ loading, topicList }) {
  return (
    <div className="col-md-9">
      <ul className="nav nav-pills content__header">
        {
          ['全部', '精华', '分享', '问答', '招聘'].map((tag, i) => (
            <li key={i} className={i ? '' : 'active'}>
              <a href="#">{tag}</a>
            </li>
          ))
        }
      </ul>
      <div className="content__topic_list">
        {
          loading
            ? null
            : topicList.map(topic => <TopicListItem key={topic.id} topic={topic} />)
        }
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
        </div>
      </div> {/* content__topic_list */}
    </div>
  )
}

const LoginPanel = (
  <div className="sidebar__panel sidebar__panel__login">
    <p className="sidebar__panel__login_title">CNode：Node.js专业中文社区</p>
    <div>您可以 <a href="#">登陆 </a>或 <a href="#">注册</a>, 也可以<a href="#"><span className="sidebar__panel__github_login">通过 GitHub 登录</span></a></div>
  </div>
)

class Home extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, topicList: [] };
  }

  async componentDidMount() {
    const result = await asyncGetData(`https://cnodejs.org/api/v1/topics`);
    this.setState({
      loading: false,
      topicList: result,
    });
  }

  render() {
    const { loading, topicList } = this.state;
    const NoReplyTopics = (
      <SidebarPanel title="无人回复的话题" >
        {topicList.filter(topic => topic.reply_count === 0).slice(0, 5).map((tp, i) => <a href="#" key={i} className="sidebar__title">{tp.title}</a>)}
      </SidebarPanel>
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
    );

    const QRcode = (
      <SidebarPanel title="客户端二维码" isQR={true}>
        <img src="http://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" className="inner__qrcode" />
        <br />
        <a href="https://github.com/soliury/noder-react-native" target="_blank" className="source_address">客户端源码地址</a>
      </SidebarPanel>
    );

    return (
      <div className="container">
        <div className="row">
        {/*

          <TopicList loading={loading} topicList={topicList} />
         */}
         <Login />
          <Sidebar>
            {LoginPanel}
            {NoReplyTopics}
            {Ranking}
            {Links}
            {QRcode}
          </Sidebar>
        </div>
      </div>
    )
  }
}

export default Home;