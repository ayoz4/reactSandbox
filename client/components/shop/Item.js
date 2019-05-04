import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    e.preventDefault();
    this.props.removeGood(this.props.id);
  }

  render() {
    return (
      <div>
        <li>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div>
            <span>{this.props.description}</span>
          </div>
          <div>
            <button onClick={this.onDelete}>delete</button>
            <button>edit</button>
          </div>
        </li>
      </div>
    );
  }
}

export default Item;
