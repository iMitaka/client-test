import React, { Component } from 'react';
import './Home.css'
import PropertyCard from '../../../shared/components/card/PropertyCard'
import Serach from './components/Search/Serach'
import { getAllPropertiesByFilter } from '../../../services/property-service';
import Pagination from "react-js-pagination";

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
            .then((result) => this.setState({ properties: result }))
    }

    componentDidMount() {
        getAllPropertiesByFilter(null, this.state.activePage)
            .then((result) => this.setState({ properties: result }))
    }

    search(filter) {
        this.setState({ filter: filter });
        getAllPropertiesByFilter(filter, this.state.activePage)
            .then((result) => this.setState({ properties: result }))
    }

    propertyDetails(id) {
        this.props.history.push('/details/' + id)
    }

    render() {
        let properties = this.state.properties.map((property, index) => {
            return (
                <div key={index} onClick={() => this.propertyDetails(property.Id)} className="col-sm-4 no-padding">
                    <PropertyCard img={'data:image/' + property.Type + ';base64,' + property.Photo}
                        price={property.Price}
                        title={property.Name}
                        address={property.Address}
                        properyType={property.PropertyType}
                        properyArea={property.Area}
                        properyBedroom={property.BedroomCount}
                        properyBathroom={property.BathroomCount}
                        status={property.OfferType}
                        isVip={property.IsVIP} />
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
                                    <strong>ТОП Имоти</strong>
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
                                    itemsCountPerPage={6}
                                    totalItemsCount={this.state.properties.length >= 1 ? this.state.properties[0].Count : 0}
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
