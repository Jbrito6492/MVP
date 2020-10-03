import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const NavBar = (props) => {
  useEffect(() => {
    ReactDOM.findDOMNode(component).addEventListener(
      "DOMContentLoaded",
      function () {
        var elems = document.querySelectorAll(".fixed-action-btn");
        var instances = M.FloatingActionButton.init(elems, options);
      }
    );
    return () => {
      ReactDOM.findDOMNode(component).removeEventListener(
        "DOMContentLoaded",
        function () {
          var elems = document.querySelectorAll(".fixed-action-btn");
          var instances = M.FloatingActionButton.init(elems, options);
        }
      );
    };
  });

  let nav = (
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large red">
        <i className="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a className="btn-floating red">
            <i className="material-icons">insert_chart</i>
          </a>
        </li>
        <li>
          <a className="btn-floating yellow darken-1">
            <i className="material-icons">format_quote</i>
          </a>
        </li>
        <li>
          <a className="btn-floating green">
            <i className="material-icons">publish</i>
          </a>
        </li>
        <li>
          <a className="btn-floating blue">
            <i className="material-icons">attach_file</i>
          </a>
        </li>
      </ul>
    </div>
  );
  return <div>{nav}</div>;
};
