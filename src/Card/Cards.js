import React, { useEffect } from 'react';
import "./card.css"
import img13 from "./Images/13.png";
import img14 from "./Images/14.png";
import img15 from "./Images/15.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            {/* Cards */}

            {/* Card-1 */}

            <div className="card-main-container"  data-aos="fade-up-left" >
                <div class="container">
                    <div class="card" >
                        <div class="imgBx">
                            <img src={img13} />
                        </div>
                        <div class="contentBx">
                            <h2>Buy</h2>
                            <div class="size Buy-size">
                                <li>New Books</li><hr />
                                <li>Used Books</li><hr />
                                <li>24 hour delivery</li><hr />
                                <li>Academic Books</li>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>
                    </div>
                </div>

                {/* <div className="lds-ripple2"><div></div><div></div></div> */}
                <div className="lds-ripple3"><div></div><div></div></div>
                {/* <div className="lds-ripple4"><div></div><div></div></div> */}

                {/* Card-2 */}

                <div class="container" data-aos="fade-up" data-aos-delay="300">
                    <div class="card">
                        <div class="imgBx">
                            <img src={img15} />
                        </div>
                        <div class="contentBx">
                            <h2>Rent</h2>
                            <div class="size Rent-size">
                                <li>Starting at ₹10</li><hr />
                                <li>Delivery within 24 hours</li><hr />
                                <li>FREE Pickup</li><hr />
                                <li>All fiction & non-fiction novels</li>
                            </div>
                            <a href="#">Rent Now</a>
                        </div>
                    </div>
                </div>

                {/* Card-3 */}

                <div class="container" data-aos="fade-up-right" data-aos-delay="300">
                    <div class="card">
                        <div class="imgBx">
                            <img src={img14} />
                        </div>
                        <div class="contentBx">
                            <h2>Sell</h2>
                            <div class="size sell-size">
                                <li>Instant Re-selling</li><hr />
                                <li>Sell books within 24 hours</li><hr />
                                <li>FREE Pickup</li><hr />
                                <li >Get instant payment</li>
                            </div>
                            <a href="#">Sell Now</a>
                        </div>
                    </div>
                </div>
            </div><hr />
        </div>
    )
};

export default Cards;
