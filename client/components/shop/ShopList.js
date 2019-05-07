import React, { Component } from "react";

import Item from "./Item";
import Modal from "../../modals/Modal";

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      id: 0,
      name: "",
      description: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onOpenEditingModal = this.onOpenEditingModal.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onOpenEditingModal(id) {
    this.setState({ isOpen: true, id: id });
  }

  onClose() {
    this.setState({ isOpen: false });
    return false;
  }

  onSubmit(e) {
    e.preventDefault();

    const { id, name, description } = this.state;

    this.props.editGood(id, name, description);

    this.setState({ isOpen: false });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.goods.map(({ id, name, description }) => (
            <Item
              key={id}
              name={name}
              description={description}
              id={id}
              removeGood={this.props.removeGood}
              editItem={this.editItem}
              onEditItemAccept={this.onEditItemAccept}
              onChange={this.onChange}
              onOpenEditingModal={this.onOpenEditingModal}
            />
          ))}
        </ul>
        {this.props.isAuthenticated && (
          <Modal
            isOpen={this.state.isOpen}
            title="Editing"
            label1="Name"
            field1="name"
            label2="Description"
            field2="description"
            buttonTitle="Accept"
            onClose={this.onClose}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
          />
        )}
      </div>
    );
  }
}

export default ShopList;
