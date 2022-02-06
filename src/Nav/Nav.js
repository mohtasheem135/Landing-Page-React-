import React from 'react';
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css';
import img1 from "./Images/1.jpg"

const Nav = () => {

    const props = {
        items: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'About',
            link: '#docs'
          },
          {
            text: 'Services',
            link: '#custom-bar'
          },
          {
            text: 'Contact',
            link: '#contact'
          }
        ],
        logo: {
        //   text: 'Responsive Navbar React'
        // img: img1
        },
        style: {
          barStyles: {
            background: '#444'

          },
          sidebarStyles: {
            background: '#222',
            buttonColor: 'white'
          }
        }
      }


  return <Navbar {...props} />
};

export default Nav;
