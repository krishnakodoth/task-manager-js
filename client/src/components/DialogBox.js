import React from "react";
import { createPortal } from "react-dom";

const DialogBox = (props) => {
  const modalDiv = (
    <>
      <div className="modal-overlay"></div>
      <div className="modal">{props.children}</div>
    </>
  );
  return createPortal(modalDiv, document.getElementById("portal-root"));
};

export default DialogBox;
