import axios from 'axios';

async function getComments(id) {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Parse-Application-Id': 'TlGsa7yDm8uz0HC7RxyyGrIS6rOADTkmBWQaQ4gO',
        'X-Parse-REST-API-Key': 'u08Z7PkPWw20wQKgQWs7TcIaWgETOAKarBQRsIO4',
    }

    const params = new URLSearchParams();

    params.append('where', `{"jobber_id":"${id}"}`);

    return axios({
        method: 'get',
        url: 'https://pg-app-t3dp88a70e2dh1qzeelk6y2h7d0dgr.scalabl.cloud/1/classes/Comments',
        headers: headers,
        params
    })

}


async function addComment(data) {

    var headers = {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'TlGsa7yDm8uz0HC7RxyyGrIS6rOADTkmBWQaQ4gO',
        'X-Parse-REST-API-Key': 'u08Z7PkPWw20wQKgQWs7TcIaWgETOAKarBQRsIO4',
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
    }

    const params = {
        'ratting':Number(data.ratting),
        'comment':data.comment,
        'jobber_id':data.jobber_id
    };


    return axios({
        method: 'post',
        url: 'https://pg-app-t3dp88a70e2dh1qzeelk6y2h7d0dgr.scalabl.cloud/1/classes/Comments',
        headers: headers,
        data: params
    })

}
export {getComments,addComment}