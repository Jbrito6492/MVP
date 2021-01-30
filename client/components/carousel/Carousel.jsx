import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHashtags } from "../../store/actions";
import { Link, Redirect } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classes from "../../css/carousel.css";
import withStyles from "isomorphic-style-loader/withStyles";

function ControlledCarousel(props) {
  const dispatch = useDispatch();
  const { hashtags } = useSelector((state) => state.hashtags);
  const [items, setItems] = useState(hashtags);

  useEffect(() => {
    dispatch(fetchHashtags());
    setItems(hashtags);
  }, [items]);

  return (
    <>
      <Grid
        container
        item
        xs={12}
        direction="column"
        justify="center"
        align="center"
        className={classes.carousel}
      >
        <Carousel>
          {items.map((item, index) => (
            <div key={index} className={classes.item}>
              <Item hashtag={`#${item}`} />
            </div>
          ))}
        </Carousel>
      </Grid>
    </>
  );
}

const Item = ({ hashtag }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <Container>
        <p>{hashtag}</p>
        {isAuthenticated && (
          <Link to="/main">
            <Button
              className={classes.button}
              onClick={console.log("link to room")}
            >
              Check it out!
            </Button>
          </Link>
        )}
      </Container>
    </>
  );
};

export default withStyles(classes)(ControlledCarousel);
