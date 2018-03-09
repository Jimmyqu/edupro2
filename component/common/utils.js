
import {
    PixelRatio,
    Dimensions
} from 'react-native';

const Util = {
    ratio: PixelRatio.get(),  //像素密度
    pixel: 1 / PixelRatio.get(),  //最小像素
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    post(url, data, callback) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                callback(responseData);
            });
    },
    get(url,callback){
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                callback(responseData);
            });
    }
};

export default Util;