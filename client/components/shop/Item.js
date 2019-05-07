import React, { Component } from "react";

import ItemWrapper from "../../styled/ItemWrapper";

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
      <ItemWrapper>
        <li>
          <div>
            <span>{name}</span>
          </div>
          <div>
            <span>{description}</span>
          </div>
          {this.props.isAuthenticated && (
            <div class="btn-group btn-group-sm">
              <button className="btn btn-danger" onClick={this.onDelete}>
                delete
              </button>
              <button
                className="btn btn-primary"
                onClick={() => onOpenEditingModal(id)}
              >
                edit
              </button>
            </div>
          )}
        </li>
      </ItemWrapper>
    );
  }
}

export default Item;
