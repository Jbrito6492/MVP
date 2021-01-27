import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/footer.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1D1D1D",
    },
    secondary: {
      main: "#C38FFF",
    },
  },
});

const Footer = ({ children }) => {
  return (
    <>
      <div className={classes.footerLeft}>
        <ThemeProvider theme={theme}>
          <Fab color="secondary" aria-label="add">
            <AddIcon color="main" fontSize="large" />
          </Fab>
        </ThemeProvider>
      </div>
      <div className={classes.footerRight}>{children}</div>
    </>
  );
};

export default withStyles(classes)(Footer);
