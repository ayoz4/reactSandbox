import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TextFieldGroup = ({
  field,
  value,
  label,
  error,
  type,
  onChange,
  checkUserExists
}) => {
  return (
    <div className="form-group">
      <label className="control-label">{label}</label>
      <input
        onBlur={checkUserExists}
        type={type}
        name={field}
        className={classNames("form-control", {
          "is-invalid": error
        })}
        value={value}
        onChange={onChange}
      />
      <div class="invalid-feedback">{error}</div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
