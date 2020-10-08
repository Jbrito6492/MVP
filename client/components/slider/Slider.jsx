import React, { useState } from "react";
import styled from "styled-components";

const Styles = styled.div``;
const Slider = (props) => {
  const [state, setState] = useState({ value: 50 });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };

  return (
    <Styles className="container">
      <label className="value">
        {state.value}
        <input
          type="range"
          min={0}
          max={100}
          name="value"
          className="slider"
          onChange={handleChange}
        />
      </label>
    </Styles>
  );
};

export default Slider;
