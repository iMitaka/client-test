import { DOMAIN_URL} from '../shared/constants/UrlConstants'
import { httpService } from './http-service'
const GET = 'GET'
export const UPLOAD_PHOTO_URL = DOMAIN_URL + '/api/Photo'

export function getCountries() {
    return httpService('/Countries/GetAllCountries', GET)
}

//................................................................................

export function getTowns(countryId) {
    return httpService('/Towns/GetTownsByCountryId?countryId=' + countryId, GET)
}

//...............................................

export function getNeighbourhood(townId) {
    return httpService('/Neighborhoods/GetNeighborhoodsByTownId?townId=' + townId, GET)
}

//..........................................................

export function getOfferType() {
    return httpService('/OfferTypes/GetOfferTypes', GET)
}


//..........................................................

export function getPropertyType() {
    return httpService('/PropertyTypes/GetPropertyTypes', GET)
}

//..........................................................

export function getCurency() {
    return httpService('/Curencies/GetCurencies', GET)
}

//..........................................................

export function getBuildingType() {
    return httpService('/BuildingTypes/GetBuildingTypes', GET)
}

//..........................................................

export function getPropertyStatus() {
    return httpService('/PropertyStatuses/GetPropertyStatuses', GET)
}

//..........................................................

export function getExtras() {
    return httpService('/Extras/GetAllExtras', GET)
}

//..........................................................

export function getApartamentType() {
    return httpService('/ApartamentTypes/GetApartamentTypes', GET)
}

