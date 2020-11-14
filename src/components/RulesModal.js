import React from "react";
import closeBtn from "assets/img/icon-close.svg";
import rules from "assets/img/image-rules-bonus.svg";

const RulesModal = (props) => {
  return (
    <div className="rules-modal">
      <div className="rules-modal__display">
          <h1 className="rules-modal__display__header" >RULES</h1>
        <img
          className="rules-modal__display__close-btn"
          onClick={() => {
            props.closeModal(false);
          }}
          src={closeBtn}
          alt="close-btn"
        />
        <img className="rules-modal__display__rules-img" src={rules} alt="rules" />
      </div>
    </div>
  );
};

export default RulesModal;
