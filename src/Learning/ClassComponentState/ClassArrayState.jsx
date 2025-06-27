import React, { Component, Fragment } from "react";

class ClassArrayState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: ["Smart-Watch", "Iphone", "Smart-TV", "Laptop"]
        };
    }

    addProduct = () => {
        this.setState(product => ({
            product: [...product.product, "Desktop"]
        }));
    }

    render() {
        const { product } = this.state;

        return (
            <div>
                <h1>Our Products</h1>

                {product && product.length !== 0 ? (
                    product.map((value, index) => (
                        <Fragment key={index}>
                            <p>{value}</p>
                        </Fragment>
                    ))
                ) : (
                    <h3>Products not Available</h3>
                )}

                <div>
                    <button onClick={this.addProduct}>Add Product</button>
                </div>
            </div>
        );
    }
}

export default ClassArrayState;
