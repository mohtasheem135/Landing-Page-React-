import React, { useEffect } from 'react';
import Faq from "react-faq-component";
import Aos from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {

    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    const data = {
        title: "Frequently Asked Questions",
        rows: [
            {
                title: "In which cities your services are available?",
                content: `We sell both new & used books accross PAN India. Currently, we are providing renting/re-selling service in Agra.`,
            },
            {
                title: "As a novel reader, are there any membership charges for me",
                content:
                    "No, you don’t need to pay any membership charges (It’s FREE!)",
            },
            {
                title: "How can I re-sell my books?",
                content: `Contact nogozo on whatsapp(+91 8979497958) & send your book list with images. We'll pick them within 24 hours and pay you instantly.`,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    }

    const styles = {
        // bgColor: 'white',
        titleTextColor: '#143469',
        // titleTextSize: '48px',
        rowTitleColor: 'black',
        rowTitleTextSize: '21px',
        rowContentColor: 'grey',
        rowContentTextSize: '18px',
        rowTitlePaddingLeft: '50px',
        rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '30px',
        rowContentPaddingLeft: '20px',
        // rowContentPaddingRight: '150px',
        // arrowColor: "red",
        //transitionDuration: "1s",
        // timingFunc: "ease"
    };

    const config = {
        animate: true,
        arrowIcon: "↑",
        tabFocus: true
    };

    return (
        <div className="faq-container" data-aos="flip-up">
            <Faq data={data}
                styles={styles}
                config={config} />
        </div>
    )
};

export default FAQ;
