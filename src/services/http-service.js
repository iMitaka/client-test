import { DOMAIN_URL} from '../shared/constants/UrlConstants'
import handleErrors from '../shared/hendlers/ajax-error-hendler'

export function httpService(url, method) {
    return fetch(DOMAIN_URL + url, { method: method }).then(handleErrors).then(res => res.json())
}

export function httpServiceWithData(url, method, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return fetch(DOMAIN_URL + url, { method: method, headers: headers, body: JSON.stringify(data) }).then(handleErrors).then(res => res.json())
}