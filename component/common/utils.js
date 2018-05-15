
import {
    PixelRatio,
    Dimensions
} from 'react-native';

import {toastShort} from '../toast';

const base_unit = 6;
function em(value) {
    return base_unit*PixelRatio.get()* value;
}

const Util = {
    version:'1.0',
    ratio: PixelRatio.get(),  //像素密度
    pixel: 1 / PixelRatio.get(),  //最小像素
    url:'http://47.104.236.86/',
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    style :{
        FONT_SIZE: em(0.7),
        FONT_SIZE_SMALLER: em(0.5),
        FONT_SIZE_SMALL: em(0.6),
        FONT_SIZE_TITLE: em(0.8),

    },
    em(value) {
        return base_unit*PixelRatio.get()* value;
    },
    toQueryString(obj) {
        return obj ? Object.keys(obj).sort().map(function (key) {
            let val = obj[key];
            if (Array.isArray(val)) {
                return val.sort().map(function (val2) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
                }).join('&');
            }

            return encodeURIComponent(key) + '=' + encodeURIComponent(val);
        }).join('&') : '';
    },
    post(url, data, callback) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: data
        };
        fetch(url,fetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                callback(responseData);
            })
            .catch(function(err) {
                console.log(err)
                toastShort('网络连接失败')
        });
    },
    get(url,callback){
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                callback(responseData);
            }).catch(function(err) {
                console.log(err)
                alert('网络连接失败')
        })
    }
};

export default Util;