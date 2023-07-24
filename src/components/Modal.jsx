import React from "react";

const Modal = (props) => {
  return (
    <div className="modalBackdrop">
      <div className="Modal">
        <div className="modal-header">
          <p className="content-title">{props.title}</p>
          <button className="modal-close" onClick={props.closeModal}>
            X
          </button>
        </div>
        <p className="modal-author">
          {props.name} | {props.date}
        </p>

        <div className="content-modal">
          <p>{props.content}</p>
        </div>
        <div className="modal-actions">
          <button className="btn publish-btn">Publish</button>
          <button className="btn delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

/*
<div className="modal">
        <div className="modal-header">
          <p className="modal-title">
            <strong>{props.title}</strong>
          </p>
          <button className="close-btn">X</button>
        </div>
        <p className="publish-date">
          {props.name} | {props.date}
        </p>
        <div className="content-modal">
          <p>{props.content}</p>
        </div>
        <div className="btn-actions">
          <button className="publish-modal">Publish</button>
          <button className="delete-modal">Delete</button>
        </div>
      </div>
*/
