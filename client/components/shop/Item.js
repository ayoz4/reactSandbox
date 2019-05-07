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
    const { id, name, description } = this.props;

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
            <button onClick={() => this.props.editItem(id)}>edit</button>
            <div>
              <input name="name" onChange={this.props.onChange} />
              <input name="desc" onChange={this.props.onChange} />
              <button onClick={this.props.onEditItemAccept}>Accept</button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Item;
