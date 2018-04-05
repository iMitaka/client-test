import React, { Component } from 'react';
import AboutUsConstants from '../../../../shared/constants/footer/AboutUsConstants'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4><strong>{AboutUsConstants.title}</strong></h4>
                </div>
                <div>
                    <p>{AboutUsConstants.content}</p>
                    <br />
                    <p>{AboutUsConstants.contentOther}</p>
                </div>
            </div>
        );
    }
}
