import React, { Component } from 'react';
import logo from '../../../../resources/images/logo2.png'
import './Photo.css'

export default class Photo extends Component {
    render() {
        let img = undefined;
        if (this.props.img) {
            img = (
                <div className="row">
                    <div className="col-md-12">
                    <div className="container-img-photo">
                        <img
                            className="img-thumbnail"
                            src={this.props.img}
                            alt="фараимоти"
                        />
                        {this.props.id <= 149 && <div className="centered"><img src={logo} alt="logo" className="img-thumbnail fix-logo"></img></div>}
                    </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {img}
            </div>
        );
    }
}