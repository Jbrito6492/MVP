import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/footer.css";

const Footer = ({ children }) => {
  return (
    <>
      <div className={classes.footerLeft}>
        <Fab style={{ color: "#1D1D1D" }} aria-label="add">
          <AddIcon style={{ color: "#C38FFF" }} fontSize="large" />
        </Fab>
      </div>
      <div className={classes.footerRight}>{children}</div>
    </>
  );
};

export default withStyles(classes)(Footer);
