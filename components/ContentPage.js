import React from "react";
import { Link } from "react-router";
import Sidebar from "./Sidebar";
import { Author, OtherTopics, NoReplyTopics } from "./SidebarBox";
import asyncGetData from "../store";
import lastReplyTime from "./lastReplyTime";

function Reply(props) {
  const { author, content, create_at} = props.reply;
  const { avatar_url, loginname } = author;
  const replytime = lastReplyTime(create_at);
  return (
     <div className="reply__wrapper">
        <a href="#" className="reply__user_avatar">
          <img className="reply__user_avatar__img" src={avatar_url} alt="" />
        </a>
        <div className="reply__user_info">
          <a href="#" className="reply__user_info__name">{loginname} </a>
          <a href="#" className="reply__user_info__time">{replytime}</a>
        </div>
        <div className="reply__content" dangerouslySetInnerHTML={{__html: content}}/>
     </div> 
  );
}

class ContentPage extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, topic: [] };
  }

  async fetchData() {
    const topicContent = await asyncGetData(`https://cnodejs.org/api/v1/topic/${this.props.params.id}`);
    const { loginname } = topicContent.author;
    const userdata = await asyncGetData(`https://cnodejs.org/api/v1/user/${loginname}`);
    this.setState({
      loading: false,
      topic: topicContent,
      userdata: userdata,
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps() {
    this.fetchData();
  }

  render() {
    const { topicList } = this.context.topicList;
    const { loading, topic, userdata } = this.state;
    const { content, author, title, replies, reply_count, top, good, tab, create_at, visit_count } = topic;
    const node = top || good ? 'topic__put_top' : 'topic__list_tab';
    const createtime = lastReplyTime(create_at);
    let topicTab = "";

    if (top) {
      topicTab = "置顶";
    } else if (good) {
      topicTab = "精华";
    } else if (tab === "share") {
      topicTab = "分享";
    } else if (tab === "ask") {
      topicTab = "问答";
    } else if (tab === "job") {
      topicTab = "招聘";
    }

    function createMarkup() {
      return { __html: content };
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 content">
            <div className="left_content__header topic_content__header">
              <h1 className="topic_content__title">
                <span className={node}>{topicTab}</span>
                {title}
              </h1>
              <div className="topic_content__changes">
                <span className="changes__span--before">发布于 {createtime}</span>
                <span className="changes__span--before">作者 <Link to={`/user/${loading ? null : author.loginname}`}>{loading ? null : author.loginname}</Link></span>
                <span className="changes__span--before">{visit_count} 次浏览</span>
                <span className="changes__span--before">来自 分享</span>
              </div>
            </div> {/* topic_content__header */}

            <div className="inner_content" dangerouslySetInnerHTML={loading ? null : createMarkup()}>
            </div> {/* inner_content */}

            <div className="reply__panel">
              <div className="left_content__header">{`${reply_count} 回复`}</div>
              {
                loading
                  ? null
                  : replies.map(reply => <Reply key={reply.id} reply={reply} />)
              }
            </div> {/* reply__panel */}
          </div> {/* col-md-9 content */}

          <Sidebar>
            { loading ? null : <Author userdata={userdata} /> }
            { loading ? null : <OtherTopics topics={userdata} currentid={this.props.params.id} /> }
            <NoReplyTopics topicList={topicList} />
          </Sidebar>
        </div>
      </div>
    );
  }
}

ContentPage.contextTypes = {
  topicList: React.PropTypes.object
}

export default ContentPage;