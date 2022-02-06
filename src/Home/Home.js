import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img2 from "./Images/2-1.png";
import img3 from "./Images/3.png";
import img5 from "./Images/5.png";
import img6 from "./Images/6.png";
import img7 from "./Images/7-1.png";
import img8 from "./Images/8.png";
import img9 from "./Images/9.png";
import img11 from "./Images/11.jpg";
import "./home.css";
import Nav from '../Nav/Nav';
import Ripples from 'react-ripples';
import { easings } from 'react-animation';
import { Wave, Random } from 'react-animated-text';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import BookIcon from '@mui/icons-material/Book';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ArticleIcon from '@mui/icons-material/Article';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../Service Cards/ServiceCard';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Cards from '../Card/Cards';
import Cardd from '../React Cards/Cardd';



const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    const AutoplaySlider = withAutoplay(AwesomeSlider);


    const style = {
        animation: `slide-in ${easings.easeOutExpo} 2s forwards`
    }

    const styleBtn = {
        animation: `pop-in ${easings.easeOutExpo} 4s forwards`
    }

    return (
        <div>
            <Nav />

            <AutoplaySlider play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}>

                {/* Slide-1 */}

                <div className="main-container-1">
                    <div className="main-container-1-text">
                        <h1 className="main-head-1">Buy Rent Sell Books</h1>
                        <h1 className="main-head-2">starting from ₹10 with FREE Home Delivery</h1>
                        <div className="main-btn-container" data-aos="fade-up-left">
                            <Ripples during={2200} color={'grey'}>
                                <button className="main-btn-1" style={styleBtn} >Download Now</button>
                            </Ripples >
                            <Ripples during={2200} >
                                <button className="main-btn-2" style={styleBtn}>Continue in Web</button>
                            </Ripples>
                        </div>

                    </div>
                    <img src={img6} className="image-2 rotating" data-aos="fade-up" />
                    <div className="main-container-1-image">
                        <img src={img5} className="image-1" alt="Nogozo-image" style={style} />
                    </div>

                </div>

                {/* Slide-2 */}

                <div className="main-container-2">
                    <div className="main-container-2-text">
                        <h1 className="main2-head-1"><Wave text="Dive in" effect="stretch" effectDuration="0.5" effectChange={1.5} /></h1>
                        <h2 className="main2-head-2"> <Wave text="the Endless world of books" effect="stretch" effectChange={1.2} /></h2>
                        <h2 className="main2-head-3"><Wave text="Buy or Rent starting at ₹10/- only" effect="verticalFadeIn" iterations="3" effectChange={1.2} /></h2>

                    </div>
                    <div className="main-btn-container-2">
                        <Ripples during={2200} color={'grey'}>
                            <button className="main2-btn-1" style={styleBtn} ><Wave text="Buy" effect="stretch" effectChange={1.2} /></button>
                        </Ripples >
                        {/* <Ripples during={2200} >
                            <button className="main-btn-2" style={styleBtn}>Continue in Web</button>
                        </Ripples> */}
                    </div>

                    <img src={img7} className="image-3 rotating" />
                    <div className="main-container-2-image">
                        <img src={img2} className="main-container-2-image-1" alt="Nogozo-image" style={style} />
                    </div>
                </div>

                {/* Slide-3 */}

                <div className="main-container-2">
                    <div className="main-container-2-text">
                        <h1 className="main2-head-1"><Wave text="Select" effect="stretch" effectDuration="0.5" effectChange={0.8} /></h1>
                        <h2 className="main2-head-2"> <Wave text="from a huge collection of books" effect="stretch" effectChange={0.7} /></h2>
                        <h2 className="main2-head-3"><Wave text="Rent the books on weekly or monthly basis" effect="verticalFadeIn" effectChange={1.2} /></h2>

                    </div>
                    <div className="main-btn-container-2">
                        <Ripples during={2200} color={'grey'}>
                            <button className="main2-btn-1" style={styleBtn} ><Wave text="Rent" effect="stretch" effectChange={1.2} /></button>
                        </Ripples >
                        {/* <Ripples during={2200} >
                            <button className="main-btn-2" style={styleBtn}>Continue in Web</button>
                        </Ripples> */}
                    </div>

                    <img src={img8} className="image-4" />
                    <div className="main-container-2-image">
                        <img src={img3} className="main-container-3-image-1" alt="Nogozo-image" style={style} />
                    </div>
                    <div className="plane-1"><img className="plane-motion" src={img9} /></div>
                </div>

                {/* Slide-4 */}

                <div className="main-container-2">
                    <div className="main-container-4-text">
                        <h1 className="main4-head-1"><Random text="2,32,44,567" effect="verticalFadeIn" iterations="1" effectDuration="1.0" effectChange={1.2} /></h1>
                        <h2 className="main4-head-2"> <Wave text="and even more books are added to our collection every minute..." effect="stretch" effectChange={0.7} /></h2>
                        <h2 className="main4-head-3"><Wave text="Join us,,,,, in the journey ahead" iterations="1" effect="verticalFadeIn" effectChange={1.2} /></h2>

                    </div>
                    <div className="main-btn-container-2">
                        <Ripples during={2200} color={'grey'}>
                            <button className="main2-btn-1" style={styleBtn} ><Wave text="Join Us" effect="stretch" effectChange={1.2} /></button>
                        </Ripples >
                        {/* <Ripples during={2200} >
                            <button className="main-btn-2" style={styleBtn}>Continue in Web</button>
                        </Ripples> */}
                    </div>
                    <div className="lds-ripple"><div></div><div></div></div>
                    {/* <img src={img8} className="image-4" /> */}
                    <div className="main-container-2-image">
                        <img src={img11} className="main-container-4-image-1" alt="Nogozo-image" style={style} />
                    </div>
                </div>
            </AutoplaySlider>
            <br /><br />
            <hr />

            {/* Simple Subcriptions text */}

            <div className="subscription-container">
                <div className="subs-text-box">
                    <h1 className="subs-head-text">All in one simple subscription</h1>
                </div>
                <div className="sub-icon-container">
                    <div className="subs-icon-box" data-aos="flip-up">
                        <BookIcon sx={{ fontSize: "70px", }} />
                        <p className="subs-icon-txt">Books</p>
                    </div>

                    <div className="subs-icon-box" data-aos="flip-up">
                        <HeadphonesIcon sx={{ fontSize: "70px", }} />
                        <p className="subs-icon-txt">AudioBooks</p>
                    </div>

                    <div className="subs-icon-box" data-aos="flip-up">
                        <SettingsVoiceIcon sx={{ fontSize: "70px", }} />
                        <p className="subs-icon-txt">Podcasts</p>
                    </div>

                    <div className="subs-icon-box" data-aos="flip-up">
                        <MusicNoteIcon sx={{ fontSize: "70px", }} />
                        <p className="subs-icon-txt">Sheet Music</p>
                    </div>

                    <div className="subs-icon-box" data-aos="flip-up">
                        <ArticleIcon sx={{ fontSize: "70px", }} />
                        <p className="subs-icon-txt">Documents</p>
                    </div>
                </div>
            </div>

            <hr />

            {/* Card */}
            <Cardd />

            {/* Service-cards */}
            <ServiceCard />

            {/* FAQ */}
            <FAQ />

            {/* Footer */}
            <Footer />

        </div>
    )
};

export default Home;
