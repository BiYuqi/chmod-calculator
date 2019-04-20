import React from "react";
import './CheckBox.scss';

const CheckBox = ({ title, text, onChange, defaultValue }) => {
  return (
    <div className="checkbox-container">
      <label htmlFor={title + text}>
        {text}
        <input
          type="checkbox"
          id={title + text}
          onChange={onChange}
          defaultChecked={defaultValue}/>
      </label>

    </div>
  )
};
export default CheckBox;
