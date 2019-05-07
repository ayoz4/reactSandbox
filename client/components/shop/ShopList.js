import React, { Component } from "react";

import Item from "./Item";

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      desc: ""
    };

    this.editItem = this.editItem.bind(this);
    this.onEditItemAccept = this.onEditItemAccept.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  editItem(id) {
    this.setState({
      id: id
    });

    console.log(this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onEditItemAccept(e) {
    const { id, name, desc } = this.state;

    this.props.editGood(id, name, desc);
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
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShopList;
