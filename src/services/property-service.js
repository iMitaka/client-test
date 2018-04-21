import { httpServiceWithData, httpService } from './http-service'
const GET = 'GET'
const POST = 'POST'

export function getAllPropertiesByFilter(filter, page) {
    return httpServiceWithData('/Properties/GetProperties?page=' + page + '&totalCount=9&type=client', "POST", filter)
}

export function getPropertyDetails(id) {
    return httpService('/Properties/GetProperty?id=' + id, GET)
}