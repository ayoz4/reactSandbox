import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    this.props.removeGood(this.props.id);
  }

  render() {
    const { id, name, description, onOpenEditingModal } = this.props;

    return (
      <div>
        <li>
          <div>
            <span>{name}</span>
          </div>
          <div>
            <span>{description}</span>
          </div>
          {this.props.isAuthenticated && (
            <div>
              <button onClick={this.onDelete}>delete</button>
              <button onClick={() => onOpenEditingModal(id)}>edit</button>
            </div>
          )}
        </li>
      </div>
    );
  }
}

export default Item;
