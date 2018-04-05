import { DOMAIN_URL} from '../shared/constants/UrlConstants'
import { httpService } from './http-service'
const GET = 'GET'
export const UPLOAD_PHOTO_URL = DOMAIN_URL + '/api/Photo'

export function getCountries() {
    return httpService('/api/Country', GET)
}

export function getPhotos(propertyId) {
    return httpService('/api/Photo?propertyId=' + propertyId, GET)
}

export function getTowns() {
    return httpService('/api/Town', GET)
}

export function getNeighbourhood() {
    return httpService('/api/Neighbourhood', GET)
}

export function getCurrency() {
    return httpService('/api/Currency', GET)
}

export function getProperyPurpose() {
    return httpService('/api/ProperyPurpose', GET)
}

export function getPropertyType() {
    return httpService('/api/PropertyType', GET)
}

export function getBuildingStatus() {
    return httpService('/api/BuildingStatus', GET)
}

export function getApartamentType() {
    return httpService('/api/ApartamentType', GET)
}

export function getBuildingType() {
    return httpService('/api/BuildingType', GET)
}

