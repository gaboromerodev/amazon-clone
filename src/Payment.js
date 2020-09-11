import React from 'react'
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
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
                    
                </div>

            </div>
            
        </div>
    )
}

export default Payment
