import React from "react";
import Carousel from "react-material-ui-carousel";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classes from "../../css/carousel.css";
import withStyles from "isomorphic-style-loader/withStyles";

function ControlledCarousel(props) {
  const items = ["#nightout", "#chill", "#studybuddy"];
  return (
    <>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        className={classes.carousel}
      >
        <Carousel>
          {items.map((item, index) => (
            <div key={index} className={classes.item}>
              <Item hashtag={item} />
            </div>
          ))}
        </Carousel>
      </Grid>
    </>
  );
}

const Item = ({ hashtag }) => {
  return (
    <>
      <Container>
        <p>{hashtag}</p>
        <Button className={classes.button}>Check it out!</Button>
      </Container>
    </>
  );
};

export default withStyles(classes)(ControlledCarousel);
