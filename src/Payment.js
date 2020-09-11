import React from 'react';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                    <h1>
                        Checkout (<Link to="/checkout">{basket?.lenght} items</Link>)
                    </h1>
                    
                {/* Payment section - delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, ca</p>
                    </div>
                </div>

                {/* Payment section - Review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                      <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {/* Here we can reuse components*/}
                        {basket.map(item => (
                             <CheckoutProduct 
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                            />
                        ))}


                    </div>
                    
                </div>

                {/* Payment section - Payment methods*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go here*/}
                    </div>
                        
                </div>

            </div>
            
        </div>
    )
}

export default Payment
