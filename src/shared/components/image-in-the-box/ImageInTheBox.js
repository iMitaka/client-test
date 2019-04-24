import React, { Component } from 'react';
import './ImageInTheBox.css'
import logo from '../../../resources/images/logo2.png'

export default class ImageInTheBox extends Component {
    render() {
        return (
            <div className="container-img">
                <img src={this.props.img} className="img-thumbnail fill" alt="thumbnail"></img>
                {this.props.id <= 149 && <div className="centered"><img src={logo} alt="logo" className="img-thumbnail fix-logo"></img></div>}
            </div>
        );
    }
}
