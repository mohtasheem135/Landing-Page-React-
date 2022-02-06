import React, { useEffect } from 'react';
import "./cardd.css"
import img13 from "./Images/13.png";
import img14 from "./Images/14.png";
import img15 from "./Images/15.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Card from 'react-animated-3d-card';

const Cardd = () => {

    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    return (
        <div className="card-holder-box" data-aos="fade-up" data-aos-delay="300">
            <Card 
            style={{
                // backgroundColor: 'black',
                width: '300px',
                height: '500px',
                cursor: 'pointer',
                backgroundImage: "linear-gradient(to left top, #a565ff, #fc594e 40%, #fefc4d )"

            }}
            
            onClick={() => console.log('Buy Card clicked')}
            data-aos="fade-up-left"
        >
            <div className="card-container" >
                <img src={img13} className="card-img13" />
                <h1 className="card-head-1">BUY</h1>
                <ul className="List">
                    <li> New Books</li>
                    <li>Second-hand Books</li>
                    <li>24 hour delivery</li>
                    <li>School & Competition books</li>
                    {/* <button onClick={click}>Buy</button> */}
                </ul>
            </div>
        </Card>

        <Card
            style={{
                // backgroundColor: 'black',
                backgroundImage: "linear-gradient(to left top,  #f16c4b, #ffa264 40%, #ffbc00)",

                width: '300px',
                height: '500px',
                cursor: 'pointer'

            }}
            
            onClick={() => console.log('Rent Card clicked')}
        >
            <div className="card-container">
                <img src={img15} className="card-img13" />
                <h1 className="card-head-1">RENT</h1>
                <ul className="List">
                    <li>Starting at ₹10</li>
                    <li>Delivery within 24 hours</li>
                    <li>FREE Pickup</li>
                    <li>All fiction & non-fiction novels</li>
                    {/* <button onClick={click}>Buy</button> */}
                </ul>
            </div>
        </Card>

        <Card
            style={{
                backgroundImage: "linear-gradient(to left top,  #82fa48, #ff6464 40%, #e3ff4d)",
                width: '300px',
                height: '500px',
                cursor: 'pointer'

            }}
            
            onClick={() => console.log('Sell Card clicked')}
        >
            <div className="card-container">
                <img src={img14} className="card-img13" />
                <h1 className="card-head-1">SELL</h1>
                <ul className="List">
                    <li>Instant Re-selling</li>
                    <li>Sell books within 24 hours</li>
                    <li>FREE Pickup</li>
                    <li>Get instant payment</li>
                </ul>
            </div>
        </Card>
        </div>
    )
};

export default Cardd;
