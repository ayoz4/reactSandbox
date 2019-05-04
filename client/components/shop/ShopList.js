import React, { Component } from "react";

import Item from "./Item";

class ShopList extends Component {
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
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShopList;
