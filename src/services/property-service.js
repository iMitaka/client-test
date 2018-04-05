import { httpServiceWithData } from './http-service'

export function getAllPropertiesByFilter(filter, page) {
    return httpServiceWithData('/api/Property?type=client&page=' + page, "POST", filter)
}

export function getPropertyDetails(id) {
    return httpServiceWithData('/api/Property/Details?id=' + id, "GET")
}