import React from "react";
import { render } from "react-dom";
import asyncGetData from "../store";

class Content extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, topicList: [] };
  }

  async componentDidMount() {
    const result = await asyncGetData(`https://cnodejs.org/api/v1/topics`);
    const topic_content = await Promise.all(result.map(async x => await asyncGetData(`https://cnodejs.org/api/v1/topic/${x.id}`)))
    this.setState({
      loading: false,
      topicList: result,
      topicContent: topic_content,
    });
  }

  getChildContext() {
    return {
      topicList: this.state
    };
  }

  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

Content.childContextTypes = {
  topicList: React.PropTypes.object
}

export default Content;