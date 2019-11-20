import axios from 'axios';

async function login() {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded"',
        'X-Parse-Application-Id': 'TlGsa7yDm8uz0HC7RxyyGrIS6rOADTkmBWQaQ4gO',
        'X-Parse-REST-API-Key': 'u08Z7PkPWw20wQKgQWs7TcIaWgETOAKarBQRsIO4',
    }

    const params = new URLSearchParams();
    params.append('username', 'admin');
    params.append('password', '601160');

    return axios({
        method: 'post',
        url: 'https://pg-app-t3dp88a70e2dh1qzeelk6y2h7d0dgr.scalabl.cloud/1/login',
        headers: headers,
        params
    })

}


async function getAllJobers() {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded"',
        'X-Parse-Application-Id': 'TlGsa7yDm8uz0HC7RxyyGrIS6rOADTkmBWQaQ4gO',
        'X-Parse-REST-API-Key': 'u08Z7PkPWw20wQKgQWs7TcIaWgETOAKarBQRsIO4',
    }

    const params = new URLSearchParams();
    params.append('username', 'admin');
    params.append('password', '601160');

    return axios({
        method: 'get',
        url: 'https://pg-app-t3dp88a70e2dh1qzeelk6y2h7d0dgr.scalabl.cloud/1/classes/Jobbers',
        headers: headers,

    })

}

async function findJooberbyInn(inn) {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Parse-Application-Id': 'TlGsa7yDm8uz0HC7RxyyGrIS6rOADTkmBWQaQ4gO',
        'X-Parse-REST-API-Key': 'u08Z7PkPWw20wQKgQWs7TcIaWgETOAKarBQRsIO4',
    }

    const params = new URLSearchParams();

    params.append('where', `{"inn":"${inn}"}`);

    return axios({
        method: 'get',
        url: 'https://pg-app-t3dp88a70e2dh1qzeelk6y2h7d0dgr.scalabl.cloud/1/classes/Jobbers',
        headers: headers,
        params
    })

}

async function findJooberbyPhone(phone) {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded"',
        'X-Parse-Application-Id': 'TlGsa7yDm8uz0HC7RxyyGrIS6rOADTkmBWQaQ4gO',
        'X-Parse-REST-API-Key': 'u08Z7PkPWw20wQKgQWs7TcIaWgETOAKarBQRsIO4',
    }

    const params = new URLSearchParams();

    params.append('where', `{"phone":"${phone}"}`);

    return axios({
        method: 'get',
        url: 'https://pg-app-t3dp88a70e2dh1qzeelk6y2h7d0dgr.scalabl.cloud/1/classes/Jobbers',
        headers: headers,
        params
    })

}

async function addJoober(data) {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Parse-Application-Id': 'TlGsa7yDm8uz0HC7RxyyGrIS6rOADTkmBWQaQ4gO',
        'X-Parse-REST-API-Key': 'u08Z7PkPWw20wQKgQWs7TcIaWgETOAKarBQRsIO4',
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }

    const params = new URLSearchParams();
    params.append('inn', '1');
    params.append('phone', 97144);
    params.append('name', data.name);
    params.append('last_name', data.last_name);
    params.append('patronymics', data.patronymics);
    params.append('birthday', new Date("2015-03-25"));

    return axios({
        method: 'post',
        url: 'https://pg-app-t3dp88a70e2dh1qzeelk6y2h7d0dgr.scalabl.cloud/1/classes/Jobbers',
        headers: headers,
        data:params
    })

}
export { login, getAllJobers, findJooberbyInn, findJooberbyPhone, addJoober }