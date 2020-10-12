import React from "react";
import profilePic from "../../images/example-profile.png";
import s from "../../css/conversationList.css";
import withStyles from "isomorphic-style-loader/withStyles";

const ConversationList = (props) => {
  return (
    <div className={s.conversationList}>
        <div className={s.conversation}>
          <img src={profilePic} />
          <div className={s.titleText}>Jorge Garcia</div>
          <div className={s.createdDate}>Oct 10</div>
          <div className={s.conversationMessage}>
            this is a message from Jorge
          </div>
        </div>
      </div>
  );
};

export default withStyles(s)(ConversationList);
