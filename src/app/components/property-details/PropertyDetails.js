import React, { Component } from 'react';
import './PropertyDetails.css'
import ImageInTheBox from '../../../shared/components/image-in-the-box/ImageInTheBox'
import { getPropertyDetails } from '../../../services/property-service'
import Photo from './components/Photo'
import { DOMAIN_URL } from '../../../shared/constants/UrlConstants'

// const urlParams = new URLSearchParams(window.location.search);
// const photo = urlParams.get('photo');
// const idProp = urlParams.get('id');
// const title = urlParams.get('title');
// document.getElementById('global-title').content = title
// document.getElementById('global-image').content = DOMAIN_URL + '/' + idProp + '/' + photo

export default class PropertyDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Id: this.props.match.params.id,
            property: {},
            photos: [],
            photoImg: ''
        }

        this.setImg = this.setImg.bind(this);
    }


    setImg(img) {
        this.setState({ photoVisible: true, photoImg: img });
    }

    componentDidMount() {
        getPropertyDetails(this.state.Id)
            .then(res => res.json())
            .then((result) => {
                this.setState({ property: result })
            })
            .catch(() => this.props.history.push('/error'))


    }

    render() {
        let photos;

        if (this.state.property.photos) {
            photos = this.state.property.photos.map((photo, index) => {
                return (
                    <div key={index} className="col-md-3" onClick={() => this.setImg(DOMAIN_URL + '/' + this.state.property.id + '/' + photo.path)}>
                        <ImageInTheBox img={DOMAIN_URL + '/' + this.state.property.id + '/' + photo.path}></ImageInTheBox>
                        <br />
                        <br />
                    </div>
                )
            })
        }

        let extras;

        if (this.state.property.extras) {
            extras = this.state.property.extras.map((extra, index) => {
                return (
                    <div key={index}>{'- ' + extra}</div>
                )
            })
        }

        let address = '';
        if (this.state.property.neighborhood) {
            address += (this.state.property.neighborhood + ', ')
        }
        if (this.state.property.town) {
            address += (this.state.property.town + ', ')
        }
        if (this.state.property.country) {
            address += (this.state.property.country)
        }

        return (
            <div className="details">
                <div className="row text-center">
                    <h2><strong>{this.state.property.title}</strong></h2>
                </div>
                <div className="row  text-center">
                    {address}
                </div>
                <hr />
                <div className="row">
                    <div className="row property-details-title">
                        <strong>Детайли</strong>
                    </div>
                    <br />
                    <div className="row">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-2">
                                        <strong>Тип</strong>
                                    </div>
                                    <div className="col-md-10">
                                        {this.state.property.propertyType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Площ</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.area} <span>m<sup>2</sup></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Спални</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.bedroomsCount}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Бани</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.bathroomsCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Оферта</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.offerType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Цена</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.price + ' ' + this.state.property.curency}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Тип на апартамента</strong>
                                    </div>
                                    <div className="col-md-7">
                                        {this.state.property.apartamentType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Година на построяване</strong>
                                    </div>
                                    <div className="col-md-7">
                                        {this.state.property.year}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Строистелство</strong>
                                    </div>
                                    <div className="col-md-10">
                                        {this.state.property.buildingType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong> Статус на обекта</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.propertyStatus}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Екстри на имота: </strong>
                                    </div>
                                    <div className="col-md-9">
                                        {extras}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Етаж: </strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.floor && this.state.property.allFloorsCount ? this.state.property.floor + ' от общо ' + this.state.property.allFloorsCount + ' етажа' : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="row property-details-title">
                        <strong>Описание</strong>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <div dangerouslySetInnerHTML={{ __html: this.state.property.description }}></div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="row">
                    <div className="row property-details-title">
                        <strong>Галерия със снимки</strong>
                    </div>
                    <br />
                    <div className="row text-center">
                        <Photo img={this.state.photoImg} />
                    </div>
                    <br />
                    <div className="row">
                        {photos}
                    </div>
                    <hr />
                </div>

            </div>
        );
    }
}
