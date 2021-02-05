import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navigateToRoom } from "../../store/actions";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import classes from "../../css/carousel.css";
import withStyles from "isomorphic-style-loader/withStyles";

const Item = ({ hashtag }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Container>
        <p>{hashtag}</p>
        {isAuthenticated && (
          <Link to="/main">
            <Button
              className={classes.button}
              onClick={() => {
                dispatch(navigateToRoom(hashtag));
              }}
            >
              Check it out!
            </Button>
          </Link>
        )}
      </Container>
    </>
  );
};

export default withStyles(classes)(Item);
