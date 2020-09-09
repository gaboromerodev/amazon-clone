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
                    <Product />
                    {/*<Product />*/}
                </div>

                <div className="home__row">
                    {/*<Product />*/}
                    {/*<Product />*/}
                    {/*<Product />*/}
                </div>

                <div className="home__row">
                     {/*<Product />*/}
                </div>
            </div>
        </div>
    );
}

export default Home
