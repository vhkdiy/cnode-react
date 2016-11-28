import React from "react";
import { render } from "react-dom";
import TopicListItem from "./TopicListItem";
import Sidebar from "./Sidebar";
import SidebarPanel from "./SidebarPanel";
import { Links, QRcode, Ranking, LoginPanel, Author, NoReplyTopics } from "./SidebarBox";
import { connect } from "react-redux";
import { getTopics } from "../api";
import { Link } from "react-router";
import Paginate from "./Paginate";

const TAGS = [{name: '全部', tab: 'all'}, {name: '精华', tab: 'good'}, {name: '分享', tab: 'share'}, {name: '问答', tab: 'ask'}, {name: '招聘', tab: 'job'}];

function TopicList({ loading, topicList, tab, page }) {
  return (
    <div className="col-md-9">
      <ul className="nav nav-pills content__header">
        {
          TAGS.map((tag, i) => (
            <li key={i} className={(tag.tab === tab) ? 'active' : ''}>
              <Link to={`?tab=${tag.tab}`}>{tag.name}</Link>
            </li>
          ))
        }
      </ul>
      <div className="content__topic_list">
        {
          loading
            ? 'loading...'
            : topicList.map(topic => <TopicListItem key={topic.id} topic={topic}/>)
        }
        <div>
         <Paginate page={page || '1'} tab={tab}/>
        </div>
      </div>
    </div>
  )
}

class Home extends React.Component {
  componentWillReceiveProps(props) {
    if (props.location.query.tab !== this.props.location.query.tab) {
      this.props.loadTopicForHome(props.location.query.tab, props.location.query.page)
    }
  }

  componentDidMount() {
    this.props.loadTopicForHome(this.props.location.query.tab, this.props.location.query.page)
  }

  render() {
    const { loading, topicList, location } = this.props;

    return (
      <div className="container">
        <div className="row">
          <TopicList tab={location.query.tab || 'all'} page={location.query.page} loading={loading} topicList={topicList}/>
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
  loadTopicForHome: async (id, page) => {
    const topics = await getTopics(id, page);
    dispatch({
      type: "LOAD_TOPICS",
      topics,
      isLoading: false, 
    });
  }
})
)(Home);