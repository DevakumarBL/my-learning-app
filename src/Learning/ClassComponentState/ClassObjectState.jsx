import React, { Component } from "react";

class ObjectState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fruits: {
        itemName: "Apple",
        itemPrice: 200,
        itemQty: "100kg"
      }
    };
  }

  changeme = () => {
    this.setState({
      Fruits: {
        itemName: "Orange",
        itemPrice: 100,
        itemQty: "200kg"
      }
    });
  };

  Addme = () => {
    this.setState({
      Fruits: {
        itemName: "Graeps",
        itemPrice: 50,
        itemQty: "50kg"
      }
    });
  };

  render() {
    const { itemName, itemPrice, itemQty } = this.state.Fruits;

    return (
      <div>
        <h1>Our Fruits List</h1>
        <p>FruitsName : {itemName}</p>
        <p>FruitsPrice : {itemPrice}</p>
        <p>FruitsQuantity : {itemQty}</p>
        <button onClick={this.changeme}>Changeme</button>
        <button onClick={this.Addme}>Addme</button>
      </div>
    );
  }
}

export default ObjectState;
