import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "../../css/room.css";
import profilePic from "../../images/example-profile.png";

const ChatView = ({ isTyping, chat, username }) => {
  return (
    <div className={styles.chatMessageList}>
      <div className={`${styles.youMessage} ${styles.messageRow}`}>
        <div className={styles.messageContent}>
          {chat.map((message, index) => {
            if (username === message.username) {
              <div key={index} className={styles.youMessageContainer}>
              <div className={styles.messageText}>{message.message}</div>
              <div className={styles.messageTime}>{message.date}</div>
            </div>;
            } else {

            }
          })}
          {isTyping && (
            <div className={styles.youMessageContainer}>
              <div className={`${styles.loading} ${styles.messageText}`}></div>
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.messageRow} ${styles.otherMessage}`}>
        <div className={styles.messageContent}>
          <img src={profilePic} />
          <div className={styles.messageText}>whats happening</div>
          <div className={styles.messageTime}>Oct 10</div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatView);
