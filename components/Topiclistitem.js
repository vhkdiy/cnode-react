import React from "react";
import lastReplyTime from "./lastReplyTime";
import { Link } from "react-router";

function TopicListItem(props) {
  const { title, good, top, reply_count, author, visit_count, tab, last_reply_at, id } = props.topic;
  const { loginname, avatar_url } = author;
  const time = lastReplyTime(last_reply_at);
  const node = top || good ? 'topic__put_top' : 'topic__list_tab';
  let topicTab = '';

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


  return (
    <div className="topic_list__cell">
      <a href="#" className="pull-left">
        <img className="user__img" src={avatar_url} title={loginname} />
      </a>
      <span className="reply_count pull-left">
        <span className="count_of_replies">{reply_count}</span>
        <span className="count_seperator">/</span>
        <span className="count_of_visits">{visit_count}</span>
      </span>

      <a href="#" className="last_time pull-right">
        <img className="user__small_img" src="http://gravatar.com/avatar/d24fc5b1c6b84dae95dd23ba1c7ebbcb?size=48" alt="" />
        <span className="last_active_time">{time}</span>
      </a>

      <div className="topic_title_wrapper">
        <span className={node}>{topicTab}</span>
        <Link className="topic_title" href={`/#/topic/${id}`}>{title}</Link>
      </div>
    </div>
  );
}

export default TopicListItem;