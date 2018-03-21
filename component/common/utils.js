
import {
    PixelRatio,
    Dimensions
} from 'react-native';



const base_unit = 6;
function em(value) {
    return base_unit*PixelRatio.get()* value;
}

const Util = {
    ratio: PixelRatio.get(),  //像素密度
    pixel: 1 / PixelRatio.get(),  //最小像素
    url:'http://192.168.0.89:8089/',
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    style :{
        FONT_SIZE: em(0.8),
        FONT_SIZE_SMALLER: em(0.6),
        FONT_SIZE_SMALL: em(0.7),
        FONT_SIZE_TITLE: em(1),

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
                console.log(responseData)
                callback(responseData);
            })
            .catch(function(err) {
                console.log(err)
                alert('网络连接失败')
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
                alert('网络连接失败')
        })
    }
};

export default Util;