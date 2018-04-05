import React, { Component } from 'react';
import './SocialMediaContacts.css'
import facebookLogo from '../../../../../resources/images/contacts/facebook.png'
import googleLogo from '../../../../../resources/images/contacts/google.png'
import linkedinLogo from '../../../../../resources/images/contacts/linkedin.png'
import instagramLogo from '../../../../../resources/images/contacts/instagram.png'
import SocialMediaUrlConstants from '../../../../../shared/constants/SocialMediaUrlConstants'

export default class SocialMediaContacts extends Component {
    render() {
        return (
            <div>
                <a href={SocialMediaUrlConstants.facebook} target="_blank" className="social-media-img-padding">
                    <img src={facebookLogo} className="img-fluid" alt="facebook"></img>
                </a>
                <a href={SocialMediaUrlConstants.google} target="_blank" className="social-media-img-padding">
                    <img src={googleLogo} className="img-fluid" alt="google"></img>
                </a>
                <a href={SocialMediaUrlConstants.linkedin} target="_blank" className="social-media-img-padding">
                    <img src={linkedinLogo} className="img-fluid" alt="linkedin"></img>
                </a>
                <a href={SocialMediaUrlConstants.instagram} target="_blank" className="social-media-img-padding">
                    <img src={instagramLogo} className="img-fluid" alt="linkedin"></img>
                </a>
            </div>
        );
    }
}
