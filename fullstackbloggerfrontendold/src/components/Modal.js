import React from "react";
import "./Modal.css";

const Modal = (props) => {
  // const { putUpdatedBlog } = props;
  if (!props.show) {
    return <></>;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button
            onClick={() => {
              props.putUpdatedBlog();
              props.onClose();
            }}
          >
            Update Blog
          </button>
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
      {/* Add a button in the footer of <Modal> called Update Blog that calls putUpdatedBlog onClick */}
    </div>
  );
};

export default Modal;
