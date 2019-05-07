import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ShopForm from "./ShopForm";
import ShopList from "./ShopList";
import Modal from "../../modals/Modal";
import { removeGood, addGood, editGood } from "../../actions/goodsActions";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      description: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, description } = this.state;
    const id = this.props.goods[this.props.goods.length - 1].id + 1;

    this.props.addGood(id, name, description);

    this.setState({ isOpen: false });

    return false;
  }

  onClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <div>
          {isAuthenticated && (
            <div>
              <button onClick={() => this.setState({ isOpen: true })}>
                Add +
              </button>
              <Modal
                isOpen={this.state.isOpen}
                title="Add good"
                label1="Name"
                field1="name"
                label2="Description"
                field2="description"
                type="text"
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                onClose={this.onClose}
              />
            </div>
          )}
          <ShopList
            goods={this.props.goods}
            removeGood={this.props.removeGood}
            editGood={this.props.editGood}
            isAuthenticated={isAuthenticated}
          />
        </div>
      </div>
    );
  }
}

ShopPage.propTypes = {
  auth: PropTypes.bool.isRequired,
  goods: PropTypes.object.isRequired,
  addGood: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
  editGood: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    goods: state.goods
  };
}

export default connect(
  mapStateToProps,
  { addGood, removeGood, editGood }
)(ShopPage);
