import React, { Component } from 'react';
import ProperyPurpose from './components/properyPurpose'
import PropertyType from './components/propertyType'
import ApartamentType from './components/аpartamentType'
import Currency from './components/currency'
import Towns from './components/towns'
import Neighbourhood from './components/neighbourhood'
import './Search.css'
import Country from './components/countries'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      PropertyTypeId: 0,
      OfferTypeId: 0,
      PriceFrom: 0,
      PriceTo: 0,
      BedroomsFrom: 0,
      BedroomsTo: 0,
      AreaFrom: 0,
      AreaTo: 0,
      CurrencyId: 0,
      ApartamentTypeId: 0,
      TownId: 0,
      NeighbourhoodId: 0,
      CountryId: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.serach = this.serach.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    
    if (name === "CountryId") {
      this.setState({
          TownId: 0,
          NeighbourhoodId: 0
      })
  }

    this.setState({
      [name]: value
    });
  }

  serach() {
    this.props.search(this.state)
  }


  render() {
    let apartamentType = undefined;
    if (this.state.PropertyTypeId === 1) {
      apartamentType = (
        <div className="row">
          <div className="col-md-12 no-padding">
            <ApartamentType name="ApartamentTypeId" value={this.state.ApartamentTypeId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
          </div>
        </div>
      )
    }
    return (
      <div className="search-bar">
        <br />
        <div className="row">
          <div className="col-md-12 no-padding">
            <Country name="CountryId" value={this.state.CountryId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 no-padding">
            <Towns name="TownId" value={this.state.TownId} countryId={this.state.CountryId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 no-padding">
            <Neighbourhood name="NeighbourhoodId" value={this.state.NeighbourhoodId} townId={this.state.TownId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 no-padding">
            <ProperyPurpose name="OfferTypeId" value={this.state.OfferTypeId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 no-padding">
            <PropertyType name="PropertyTypeId" value={this.state.PropertyTypeId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
          </div>
        </div>
        {apartamentType}
        <div className="row">
          <div className="row">
            <div className="row text-center">
              <strong>Цена</strong>
            </div>
            <div className="col-lg-6 text-center no-padding">
              От
                <input type="number" className="form-control" name="PriceFrom" value={this.state.PriceFrom} onChange={this.handleInputChange} />
            </div>
            <div className="col-lg-6 text-center no-padding">
              До
                <input type="number" className="form-control" name="PriceTo" value={this.state.PriceTo} onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
        <div>
          <Currency name="CurrencyId" value={this.state.CurrencyId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
        </div>
        <div className="row">
          <div className="row">
            <div className="row text-center">
              <strong>Спални</strong>
            </div>
            <div className="col-lg-6 text-center no-padding">
              От
              <input type="number" className="form-control" name="BedroomsFrom" value={this.state.BedroomsFrom} onChange={this.handleInputChange} />
            </div>
            <div className="col-lg-6 text-center no-padding">
              До
              <input type="number" className="form-control" name="BedroomsTo" value={this.state.BedroomsTo} onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="row">
            <div className="row text-center">
              <strong>Площ (кв.м.)</strong>
            </div>
            <div className="col-lg-6 text-center no-padding">
              От
              <input type="number" className="form-control" name="AreaFrom" value={this.state.AreaFrom} onChange={this.handleInputChange} />
            </div>
            <div className="col-lg-6 text-center no-padding">
              До
              <input type="number" className="form-control" name="AreaTo" value={this.state.AreaTo} onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <button className="btn-lg button-color search-button" onClick={this.serach}><strong>Търсене</strong></button>
        </div>
        <br />
      </div>
    );
  }
}

export default Search;
