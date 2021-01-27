import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRadiusInMiles } from "../../store/actions";
import { BiSend } from "react-icons/bi";
import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #c38fff;
  font-size: 18px;
`;
const Slider = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ value: 0 });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const { value } = state;
    dispatch(setRadiusInMiles({ radius: value }));
    setRadiusInMeters(value);
  };

  return (
    <Styles className="container">
      <label className="value">
        {state.value} miles radius
        <input
          type="range"
          min={0}
          max={85}
          name="value"
          className="slider"
          onChange={handleChange}
        />
      </label>
      <BiSend size={28} color={"#C38FFF"} onClick={handleClick} />
    </Styles>
  );
};

export default Slider;
