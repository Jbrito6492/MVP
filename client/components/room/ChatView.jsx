import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "../../css/room.css";
import profilePic from "../../images/example-profile.png";

const ChatView = ({ isTyping, chat, username }) => {
  return (
    <div className={styles.chatMessageList}>
      <div className={styles.messageContent}>
        {chat.map((message, index) => {
          console.log(message);
          return username === message.username ? (
            <div className={`${styles.youMessage} ${styles.messageRow}`}>
              <div key={message.id} className={styles.youMessageContainer}>
                <div className={styles.messageText}>{message.message}</div>
                <div className={styles.messageTime}>{message.date}</div>
              </div>
            </div>
          ) : (
            <div className={`${styles.messageRow} ${styles.otherMessage}`}>
              <div className={styles.messageContent}>
                <img src={profilePic} />
                <div className={styles.messageText}>{message.message}</div>
                <div className={styles.messageTime}>{message.date}</div>
              </div>
            </div>
          );
        })}
        {isTyping && (
          <div className={styles.youMessageContainer}>
            <div className={`${styles.loading} ${styles.messageText}`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatView);
