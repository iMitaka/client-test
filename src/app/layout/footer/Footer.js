import React, { Component } from 'react';
import './Footer.css'
import Contacts from './components/Contacts'
import AboutUs from './components/AboutUs'
import SocialMediaContacts from './components/social-media/SocialMediaContacts'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row footer-padding">
                        {/* <div className="col-lg-4">
                            <Contacts />
                        </div> */}
                        <div className="col-lg-12">
                            <AboutUs />
                            {/* <SocialMediaContacts /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
