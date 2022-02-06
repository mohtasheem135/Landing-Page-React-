import React, { useEffect } from 'react';
import "./serviceCard.css";
import img1 from "./Images/1.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = () => {

    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);


    return (
        <div>

            <div class="header">
                <h1>Reliable, efficient delivery</h1>
                <h1>...</h1>

                <p>"The person, be it gentleman or lady, who has not pleasure in a good novel, 
                    must be intolerably stupid.”</p>
            </div>

            <div class="row1-container">
                <div class="box box-down cyan" data-aos="fade-up-left">
                    <h2>One Stop for all your search</h2>
                    <p>A single dedicated platform to buy, rent and sell new as well as used books.</p>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg"  alt="" />
                    {/* <a href="https://www.vecteezy.com/free-vector/fast-delivery">Fast Delivery Vectors by Vecteezy</a> */}
                </div>

                <div class="box red" data-aos="fade-up">
                    <h2>Fastes Delivery</h2>
                    <p>Get free delivery at your doorstep on all orders above ₹999.</p>
                    <img src={img1} className="img1" alt="" />
                </div>

                <div class="box box-down blue" data-aos="fade-up-right">
                    <h2>Instant Reselling</h2>
                    <p>Sell your books while sitting at home with free pickup within 24 hours.</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>

            <div class="row2-container" data-aos="fade-up">
                <div class="box orange">
                    <h2>Rent books</h2>
                    <p>Rent all academic and non-academic books & novels starting from ₹10 only.</p>
                    <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                </div>
            </div>

        </div>
    )
};

export default ServiceCard;
