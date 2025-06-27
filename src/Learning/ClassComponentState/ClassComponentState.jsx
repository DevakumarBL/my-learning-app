import React, { Fragment } from "react";
class ClassComponentState extends React.Component {
    constructor(){
        super();
            this.state={
                ShopName:"Decathlon",
                location:"Chennai",
                item:[
                    {
                        itemname:"CricketBat",
                        itemBrand:"MRF",
                        itemPrice:"1.5L"
                    },
                    {
                        itemname:"CricketBall",
                        itemBrand:"SF",
                        itemPrice:"3000RS"
                    },
                    {
                        itemname:"CricketKit",
                        itemBrand:"SS",
                        itemPrice:"40000RS"
                    },
                 ],
                  CouponCards :["CricketBat5000","CricketBall500","CricketKit1000"]
            }     
    }
    render(){
        return(
            <div>
                <h1>State Example</h1>
                <p><b>ShopName : {this.state.ShopName}</b></p>
                <p><b>Location : {this.state.location}</b></p>
                <h4>Coupan Code</h4>
                    <ul>
                        {
                            (this.state.CouponCards && this.state.CouponCards.length !==0)?
                                this.state.CouponCards.map((value,index)=>{
                                return<Fragment key={index}>
                                    <li>{value}</li>
                                </Fragment>
                            })
                            :
                                <h4>No Coupn code is Available</h4>
                        }
                    </ul>
                    <h2>Our Items</h2>
                    <div className="items">
                        {
                            (this.state.item && this.state.item.length !==0)?
                                this.state.item.map(
                                    (value,index)=>{
                                        const{itemname,itemBrand,itemPrice}=value
                                        return<Fragment key={index}>
                                            <table border={1} cellPadding={5} cellSpacing={0}>
                                                <tr>
                                                     <th>ItemNames</th>
                                                     <th>ItemBrands</th>
                                                     <th>ItemPrice</th>
                                                </tr>
                                                <tr>
                                                    <td>{itemname}</td>
                                                    <td>{itemBrand}</td>
                                                    <td>{itemPrice}</td>
                                                </tr>
                                                
                                            </table>
                                        </Fragment>
                                    }
                                )
                            :
                                <h4>Currently no Items Available</h4>
                        }
                        <hr />
                    </div>
            </div>
        )
    }

}
export default ClassComponentState;