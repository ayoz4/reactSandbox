import React, { Component } from "react";

import Portal from "../components/portal/Portal";
import TextFieldGroup from "../components/common/TextFieldGroup";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      label1,
      label2,
      field1,
      field2,
      title,
      isOpen,
      onSubmit,
      onClose,
      onChange,
      type
    } = this.props;

    return (
      <Portal>
        {isOpen && (
          <form onSubmit={onSubmit} className="col-md-4 offset-md-4">
            <span>{title}</span>
            <TextFieldGroup
              field={field1}
              label={label1}
              type={type}
              onChange={onChange}
            />
            <TextFieldGroup
              field={field2}
              label={label2}
              type={type}
              onChange={onChange}
            />
            <div>
              <button type="submit" className="btn btn-primary">
                Create good
              </button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </form>
        )}
      </Portal>
    );
  }
}

export default Modal;
