import React, { Component } from 'react';
import './PropertyDetails.css'
import ImageInTheBox from '../../../shared/components/image-in-the-box/ImageInTheBox'
import { getPropertyDetails } from '../../../services/property-service'
import Photo from './components/Photo'
import { DOMAIN_URL } from '../../../shared/constants/UrlConstants'

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
                console.log(result)
                this.setState({ property: result })
                document.getElementById('global-title').content = result.title
                document.getElementById('global-image').content = DOMAIN_URL + '/' + result.id + '/' + (result.photos.length >= 1 ? result.photos[0].path : '')
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

        return (
            <div className="details">
                <div className="row text-center">
                    <h2><strong>{this.state.property.title}</strong></h2>
                </div>
                <div className="row  text-center">
                    {this.state.property.neighborhood + ', ' + this.state.property.town + ', ' + this.state.property.country}
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
