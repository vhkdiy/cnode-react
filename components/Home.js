import React from "react";
import { render } from "react-dom";
import TopicListItem from "./TopicListItem";
import Sidebar from "./Sidebar";
import SidebarPanel from "./SidebarPanel";
import GetStart from "./GetStart";
import Login from "./Login";
import asyncGetData from "../store";
import { Links, QRcode, Ranking, LoginPanel, Author, NoReplyTopics } from "./SidebarBox";
import { connect } from "react-redux";
import { getTopics } from "../api";
import { Link } from "react-router";

function TopicList({ loading, topicList, topicContent, tab }) {
  return (
    <div className="col-md-9">
      <ul className="nav nav-pills content__header">
        {
          [{name: '全部', tab: 'all'}, {name: '精华', tab: 'good'}, {name: '分享', tab: 'share'}, {name: '问答', tab: 'ask'}, {name: '招聘', tab: 'job'}].map((tag, i) => (
            <li key={i} className={(tag.tab === tab) ? 'active' : ''}>
              <Link to={`?tab=${tag.tab}`}>{tag.name}</Link>
            </li>
          ))
        }
      </ul>
      <div className="content__topic_list">
        {
          loading
            ? null
            : topicList.map(topic => <TopicListItem key={topic.id} topic={topic}/>)
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
      </div>
    </div>
  )
}


class Home extends React.Component {
  componentWillReceiveProps(props) {
    this.props.loadTopicForHome(props.location.query.tab)
  }

  componentDidMount() {
    this.props.loadTopicForHome(this.props.location.query.tab)
  }

  render() {
    const { loading, topicList, location } = this.props;

    return (
      <div className="container">
        <div className="row">
          <TopicList tab={location.query.tab || 'all'} loading={loading} topicList={topicList}/>
          <Sidebar>
            {LoginPanel}
            <NoReplyTopics topicList={topicList} />
            {Ranking}
            {Links}
            {QRcode}
          </Sidebar>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  topicList: state.topicList.topics,
  loading: state.topicList.isLoading,
}),
dispatch => ({
  loadTopicForHome: async (id) => {
    const topics = await getTopics(id);
    console.log(topics)
    dispatch({
      type: "LOAD_TOPICS",
      topics,
      isLoading: false, 
    });
  }
})
)(Home);