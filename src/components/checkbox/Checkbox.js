import React from "react";
import "./Checkbox.css";

export const CheckBox = ({ id, label, onChange, checked }) => {
  return (
    <div className="checkbox">
      <ul className="tg-list">
        <li className="tg-list-item">
          <input
            className="tgl tgl-flat"
            id={id}
            checked={checked}
            type="checkbox"
            onChange={onChange}
          />
          <label className="tgl-btn" for={id}></label>
        </li>
      </ul>
      <span className="label">{label}</span>
    </div>
  );
};
