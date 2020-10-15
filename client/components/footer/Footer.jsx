import React from "react";
import { Link } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/footer.css";

const Footer = (props) => {
  return (
    <>
      <div className={classes.footerLeft}>
        <Link to="#">+</Link>
      </div>
      <div className={classes.footerRight}></div>
    </>
  );
};

export default withStyles(classes)(Footer);
