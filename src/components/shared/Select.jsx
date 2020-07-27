import React from "react";

const Select = ({ label, value, onChange, options }) => {
  return (
    <div className="field">
      <div className="control">
        <label className="label" htmlFor="">
          {label}
        </label>
        <div className="select is-primary">
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
