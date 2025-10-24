import React from "react";

class ClassComponentState extends React.Component {
    constructor() {
        super();
        this.state = {
            ShopName: "Decathlon",
            location: "Chennai",
            item: [
                {
                    itemname: "CricketBat",
                    itemBrand: "MRF",
                    itemPrice: "1.5L"
                },
                {
                    itemname: "CricketBall",
                    itemBrand: "SF",
                    itemPrice: "3000RS"
                },
                {
                    itemname: "CricketKit",
                    itemBrand: "SS",
                    itemPrice: "40000RS"
                },
            ],
            CouponCards: ["CricketBat5000", "CricketBall500", "CricketKit1000"]
        };
    }

    render() {
        return (
            <div>
                <h1>State Example</h1>
                <p><b>Shop Name:</b> {this.state.ShopName}</p>
                <p><b>Location:</b> {this.state.location}</p>

                <h4>Coupon Codes</h4>
                {
                    (this.state.CouponCards && this.state.CouponCards.length !== 0) ? (
                        <ul>
                            {this.state.CouponCards.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No Coupon codes are available</p>
                    )
                }

                <h2>Our Items</h2>
                {
                    (this.state.item && this.state.item.length !== 0) ? (
                        <table border={1} cellPadding={5} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Item Brand</th>
                                    <th>Item Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.item.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.itemname}</td>
                                        <td>{value.itemBrand}</td>
                                        <td>{value.itemPrice}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Currently no Items Available</p>
                    )
                }
            </div>
        );
    }
}

export default ClassComponentState;
