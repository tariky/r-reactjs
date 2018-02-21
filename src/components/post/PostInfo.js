import React, { Component } from "react";

class PostInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <div>
        <div className="item-title">
          <h3>
            <a href={"https://reddit.com" + info.permalink}>{info.title}</a>
          </h3>
        </div>
        <div className="submited">
          <span>submitted by </span>
          <a href={"https://www.reddit.com/user/" + info.author}>
            {info.author}
          </a>
        </div>
        <div className="comments">
          <a className="comments-badge" href={"http://" + info.domain}>
            {info.domain}
          </a>
        </div>
      </div>
    );
  }
}

export default PostInfo;
