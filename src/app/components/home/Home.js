import React, { Component } from 'react';
import './Home.css'
import PropertyCard from '../../../shared/components/card/PropertyCard'
import Serach from './components/Search/Serach'
import { getAllPropertiesByFilter } from '../../../services/property-service';
import Pagination from "react-js-pagination";
import { DOMAIN_URL } from '../../../shared/constants/UrlConstants'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            properties: [],
            activePage: 1,
            filter: {}
        }

        this.search = this.search.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
        this.propertyDetails = this.propertyDetails.bind(this)
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        getAllPropertiesByFilter(this.state.filter, pageNumber)
            .then(res => res.json())
            .then((result) => this.setState({ properties: result }))
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        getAllPropertiesByFilter(null, this.state.activePage)
            .then(res => res.json())
            .then((result) => this.setState({ properties: result }))
            .catch((err) => console.log(err))
    }

    search(filter) {
        this.setState({ filter: filter });
        getAllPropertiesByFilter(filter, this.state.activePage)
            .then(res => res.json())
            .then((result) => this.setState({ properties: result }))
            .catch((err) => console.log(err))
    }

    propertyDetails(id, photo, title) {
        this.props.history.push('/details/' + id)
        // this.props.history.push('/details/' + id + '?id=' + id + '&photo=' + photo + '&title=' + title)
    }

    render() {
        let properties = this.state.properties.map((property, index) => {
            let rowClass = ''
            if ((index + 1) % 3 === 0) {
                rowClass = "row"
            }

            let address = '';
            if (property.neighborhood) {
                address += (property.neighborhood + ', ')
            }
            if (property.town) {
                address += (property.town + ', ')
            }
            if (property.country) {
                address += (property.country)
            }

            return (
                <div key={index} className={rowClass}>
                    <div key={index} onClick={() => this.propertyDetails(property.id, 
                        (property.photos.length >= 1 ? property.photos[0].path : ''),
                        property.title)} 
                        className="col-sm-4 no-padding">
                        <PropertyCard img={DOMAIN_URL + '/' + property.id + '/' + (property.photos.length >= 1 ? property.photos[0].path : '')}
                            id={property.id}
                            code={property.code}
                            price={property.price + ' ' + property.curency}
                            title={property.title}
                            address={address}
                            properyType={property.propertyType}
                            properyArea={property.area}
                            properyBedroom={property.bedroomsCount}
                            properyBathroom={property.bathroomsCount}
                            status={property.offerType}
                            isVip={property.isVIP} />
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="row">
                    <div className="col-md-2 no-padding">
                        <div className="row">
                            <hr />
                            <Serach search={this.search} />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-12">
                                    <strong>Всички имоти</strong>
                                </div>
                                <hr />
                            </div>
                            <div className="row">
                                {properties}
                            </div>
                            <hr />
                            <div className="text-center">
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={9}
                                    totalItemsCount={this.state.properties.length >= 1 ? this.state.properties[0].totalCount : 0}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
