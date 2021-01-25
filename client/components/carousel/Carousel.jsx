import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import classes from "../../css/carousel.css";
import withStyles from "isomorphic-style-loader/withStyles";

function ControlledCarousel(props) {
  return (
    <div className={classes.carousel}>
      <Container fluid>
        <Carousel>
          <Carousel.Item interval={1500} style={{ height: "300px" }}>
            <h3 className="d-block w-100">#Trending</h3>
            <Carousel.Caption>
              <h3>#nightout</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500} style={{ height: "300px" }}>
            <h3 className="d-block w-100">#Trending</h3>
            <Carousel.Caption>
              <h3>#chill</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500} style={{ height: "300px" }}>
            <h3 className="d-block w-100">#Trending</h3>
            <Carousel.Caption>
              <h3>#studybuddy</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default withStyles(classes)(ControlledCarousel);
