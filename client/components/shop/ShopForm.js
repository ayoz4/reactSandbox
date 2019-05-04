import React, { Component } from "react";

//import Portal from "../portal/Portal";
import TextFieldGroup from "../common/TextFieldGroup";

class ShopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const id = this.props.goods[this.props.goods.length - 1].id + 1;
    const { name, description } = this.state;

    this.props.addGood(id, name, description);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="col-md-4 offset-md-4">
        <TextFieldGroup
          label="Name"
          onChange={this.onChange}
          type="text"
          field="name"
        />

        <TextFieldGroup
          field="description"
          label="Description"
          onChange={this.onChange}
          type="text"
        />

        <button type="submit" className="btn btn-primary">
          Create good
        </button>
      </form>
    );
  }
}

export default ShopForm;
