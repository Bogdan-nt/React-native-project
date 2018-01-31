import  { AsyncStorage } from 'react-native';
import  { ACCESS_TOKEN } from './Config';
import { authorized } from './Utils';

let User = {
    logout: () => {
        return AsyncStorage.removeItem(ACCESS_TOKEN)
    },
    getToken: () => {
        return AsyncStorage.getItem(ACCESS_TOKEN);
    },
    isLoggedIn:() =>{
        return AsyncStorage.getItem(ACCESS_TOKEN).then((val) => {
            if(typeof val != 'string') {
                return {logged: false}
            } else { 
                return {logged: true}
            }
        })
    },
    getSources: () => {
        const url = `http://127.0.0.1:8000/sources/`;
        return authorized(url, 'GET');
    },
    addSource: (sourceData) => {
        const url = `http://127.0.0.1:8000/sources/`;
        return authorized(url, 'POST', JSON.stringify(sourceData));
    },
    login: (user)=> {
        console.log('here');
        const url = `http://127.0.0.1:8000/login/`;
        return fetch(url, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log('sending request');
            if(responseJson.token) {
                return AsyncStorage.setItem(ACCESS_TOKEN, responseJson.token).then(e => {
                    return true;
                });
            } else {
                console.log(responseJson);
                return false;
            }
        }).catch(err => {
            console.warn('Error: ', err)
        })
    }
};

export default User;