import React from "react";
import { render } from "react-dom";
import TopicListItem from "./TopicListItem";
import Sidebar from "./Sidebar";
import SidebarPanel from "./SidebarPanel";
import GetStart from "./GetStart";
import Login from "./Login";
import asyncGetData from "../store";
import { Links, QRcode, Ranking, LoginPanel } from "./SidebarBox";

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

class Home extends React.Component {
  render() {
    const { loading, topicList } = this.context.topicList;
    const NoReplyTopics = (
      <SidebarPanel title="无人回复的话题" >
        {topicList.filter(topic => topic.reply_count === 0).slice(0, 5).map((tp, i) => <a href="#" key={i} className="sidebar__title">{tp.title}</a>)}
      </SidebarPanel>
    )

    return (
      <div className="container">
        <div className="row">
          <TopicList loading={loading} topicList={topicList} />
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

Home.contextTypes = {
  topicList: React.PropTypes.object
}

export default Home;