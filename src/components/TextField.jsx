import React from "react";
import "./textfield.css";

const Textfield = ({
  type,
  placeholder,
  label,
  disabled = false,
  error = false,
  value,
  onChange,
  name,
  step,
}) => {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          label={label}
          disabled={disabled}
          value={value}
          onChange={onChange}
          error={error}
          name={name}
          step={step}
        ></input>
      </div>
      {error && <p style={{ color: "red" }}>please enter the valid {label}</p>}
    </div>
  );
};
export default Textfield;
