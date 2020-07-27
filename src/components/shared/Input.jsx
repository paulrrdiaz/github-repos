import React from "react";

const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="field">
      <div className="control">
        <label className="label" htmlFor="">
          {label}
        </label>
        <input
          className="input is-primary"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
