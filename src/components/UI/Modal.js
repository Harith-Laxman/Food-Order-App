import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.Backdrop}></div>;
};

const Overlay = (props) => {
  return <div className={classes.Overlay}>{props.children}</div>;
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  <Fragment>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
  </Fragment>;
};

export default Modal;
