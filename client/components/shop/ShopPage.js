import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ShopForm from "./ShopForm";
import ShopList from "./ShopList";
import { removeGood, addGood } from "../../actions/goodsActions";

class ShopPage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <div>
          {isAuthenticated && (
            <ShopForm addGood={this.props.addGood} goods={this.props.goods} />
          )}
          <ShopList
            goods={this.props.goods}
            removeGood={this.props.removeGood}
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
  removeGood: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    goods: state.goods
  };
}

export default connect(
  mapStateToProps,
  { addGood, removeGood }
)(ShopPage);
