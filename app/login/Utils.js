import  { AsyncStorage } from 'react-native';
//import { ACCESS_TOKEN } from '../Config';


export function authorized(url, method = 'GET', body = {}, noBody = false) {
    return AsyncStorage.getItem("").then((token) => {
        let options = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            }
        }
        if (method !== 'GET' && method !== 'HEAD' && method !== 'DELETE' && !noBody)  {
            options.body = body;
        }
        return fetch(url, options)
        .then( response => {
            return response;
        })
        .catch( err => {
            console.warn(err);
        })
    })
    .catch(err => {
        console.warn(err);
    }); 
}