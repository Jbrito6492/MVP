import React from "react";
import profilePic from "../../images/example-profile.png";
import Loadable from "react-loadable";
import classes from "../../css/conversationList.css";
import withStyles from "isomorphic-style-loader/withStyles";

const ConversationList = (props) => {

  return (
    <div className={classes.conversationList}>
      <div className={classes.conversation}>
        <img src={profilePic} />
        <div className={classes.titleText}>Jorge Garcia</div>
        <div className={classes.createdDate}>Oct 10</div>
        <div className={classes.conversationMessage}>
          this is a message from Jorge
        </div>
      </div>
    </div>
  );
};

export default withStyles(classes)(ConversationList);
