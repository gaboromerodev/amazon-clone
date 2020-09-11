import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt="" />
            
                <div className="home__row">
                    <Product 
                        id="11223344"
                        title="Apple MacBook Pro 15 Inc. 2017 TouchBar - 3.1GHz i7 - 16GB RAM" 
                        price={29.99} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Jl-S-MHTL._AC_SX450_.jpg" 
                         />
                    <Product 
                        id="49538094"
                        title="Kenwood Kmix Stand Mixer for Baking, 
                            Stylish Kitchen with K-beater, Dough Hool and Whisk, 5 litre Glass Bowl"
                        price={50.0}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/Kitchen/XCM_CUTTLE_1254076_1313717_UK_3293401_420x420_en_GB._SX300_CB407684357_.jpg"
                    />
                </div>

                <div className="home__row">
                     <Product 
                        id="333444"
                        title="The Lean startup" 
                        price={69.99} 
                        image="https://m.media-amazon.com/images/I/41jNy2IP4ZL._AC_SY240_.jpg" 
                        rating={5} />
                    <Product 
                        id="555666"
                        title="Apple iPad 10.2 32GB Wi-Fi - Space Greyg"
                        price={89.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61mXrcMU6LL._AC_SY679_.jpg"
                    />
                    <Product 
                        id="777888"
                        title="Apple iPad Air 2 64GB Wi-Fi - Space Grey (Renewed)"
                        price={103.0}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41kHncBEG6L._AC_SX184_.jpg" 
                    />
                
                </div>

                <div className="home__row">
                    <Product 
                        id="999101"
                        title="Kenwood Kmix Stand Mixer for Baking, 
                            Stylish Kitchen with K-beater, Dough Hool and Whisk, 5 litre Glass Bowl"
                        price={598.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/713cDNjcXSL._AC_SX679_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home
