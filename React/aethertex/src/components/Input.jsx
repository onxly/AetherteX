import React from "react";

function Input({
  containerClassName,
  inputClassName,
  buttonLabel,
  buttonClassName,
}) {
  return (
    <div className={containerClassName}>
      <input className={inputClassName} placeholder="Type here..." />
      <div className="vr" />
      <button className={buttonClassName}>{buttonLabel}</button>
    </div>
  );
}

export default Input;
