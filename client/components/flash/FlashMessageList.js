import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FlashMessage from "./FlashMessage";
import { deleteFlashMessage } from "../../actions/flashMessages";

class FlashMessageList extends Component {
  render() {
    const { deleteFlashMessage } = this.props;

    const messages = this.props.messages.map(message => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={deleteFlashMessage}
      />
    ));
    return <div>{messages}</div>;
  }
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.flashMessages
});

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessageList);
