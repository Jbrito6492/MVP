import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHashtags } from "../../store/actions";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Item from "./Item.jsx";
import Grid from "@material-ui/core/Grid";
import classes from "../../css/carousel.css";
import withStyles from "isomorphic-style-loader/withStyles";

function ControlledCarousel(props) {
  const dispatch = useDispatch();
  const { hashtags } = useSelector((state) => state.hashtags);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) dispatch(fetchHashtags());
    return () => {
      isMounted = false;
    };
  }, []);

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
          {hashtags.map((item, index) => (
            <div key={index} className={classes.item}>
              <Item hashtag={`#${item}`} />
            </div>
          ))}
        </Carousel>
      </Grid>
    </>
  );
}

export default withStyles(classes)(ControlledCarousel);
