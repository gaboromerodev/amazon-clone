import React, { useState } from 'react';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();


    const stripe = useStripe();  // these are hooks
    const elements = useElements();

    const [error , setError] = useState(null);
    const [disable, setDisabled] = useState(true);

    const handleSubmit = e => {
        // do all the fancy stripe stuff
    }

    const handleChange = event => {
        // listen for changes in the CardElement
        // Display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.meesage : "");
    }

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

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </div>
                        </form>
                    </div>
                        
                </div>

            </div>
            
        </div>
    )
}

export default Payment
