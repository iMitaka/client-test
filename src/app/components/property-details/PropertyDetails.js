import React, { Component } from 'react';
import './PropertyDetails.css'
import ImageInTheBox from '../../../shared/components/image-in-the-box/ImageInTheBox'
import { getPropertyDetails } from '../../../services/property-service'
import { getPhotos } from '../../../services/nomenclature-service'
import Photo from './components/Photo'

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
        this.setState({ photoVisible: true,  photoImg: img});
    }

    componentDidMount() {
        getPropertyDetails(this.state.Id)
            .then((result) => {
                this.setState({ property: result })
                getPhotos(this.state.Id)
                    .then((photos) => this.setState({ photos: photos }))
            })
            .catch(() => this.props.history.push('/error'))


    }

    render() {
        let photos = this.state.photos.map((photo, index) => {
            return (
                <div key={index} className="col-md-3" onClick={() => this.setImg('data:image/' + photo.Type + ';base64,' + photo.Photo)}>
                    <ImageInTheBox img={'data:image/' + photo.Type + ';base64,' + photo.Photo}></ImageInTheBox>
                    <br />
                    <br />
                </div>
            )
        })

        return (
            <div className="details">
                <div className="row text-center">
                    <h2><strong>{this.state.property.Name}</strong></h2>
                </div>
                <div className="row  text-center">
                    {this.state.property.Address}
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
                                        {this.state.property.PropertyType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Площ</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.Area} <span>m<sup>2</sup></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Спални</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.BedroomCount}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Бани</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.BathroomCount}
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
                                        {this.state.property.OfferType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>Цена</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.Price}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Тип на апартамента</strong>
                                    </div>
                                    <div className="col-md-7">
                                        {this.state.property.ApartamentType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Година на построяване</strong>
                                    </div>
                                    <div className="col-md-7">
                                        {this.state.property.Year}
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
                                        {this.state.property.BuildingType}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong> Статус на обекта</strong>
                                    </div>
                                    <div className="col-md-9">
                                        {this.state.property.BuildingStatus}
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
                            <div dangerouslySetInnerHTML={{ __html: this.state.property.Description }}></div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="row">
                    <div className="row property-details-title">
                        <strong>Галерия със снимки</strong>
                    </div>
                    <br />
                    <div className="row">
                        {photos}
                    </div>
                    <hr />
                </div>
                <Photo img={this.state.photoImg}/>
            </div>
        );
    }
}
