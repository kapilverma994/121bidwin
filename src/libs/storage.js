import CryptoJS from 'crypto-js';

const encryptData = (data, key) => {
    try {
        let parsedString = JSON.stringify(data)
        let ciphertext = CryptoJS.AES.encrypt(parsedString, JSON.stringify(key)).toString();
        return ciphertext;
    }
    catch (err) {
        return null
    }

}

const decryptData = (cipherText, key) => {
    try {
        let bytes = CryptoJS.AES.decrypt(cipherText, JSON.stringify(key));
        let originalText = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(originalText)
    }
    catch (err) {
        return null
    }

}

const setLocalStorage = (key, obj, expiry) => {
    let seconds = (parseInt(expiry) > 0 ? expiry : 3600 * 24 * 365)
    let expireAt = new Date().getTime() + (seconds * 1000)

    let dataObject = {
        expireAt: expireAt,
        data: JSON.stringify(obj)
    }
    localStorage.setItem(key, JSON.stringify(dataObject))
}

const getLocalStorage = (key) => {
    try {
        let data = localStorage.getItem(key)
        let dataObject = JSON.parse(data)
        let currentTime = new Date().getTime()

        if (dataObject.expireAt > currentTime) {

            return JSON.parse(dataObject.data)
        }
        else {
            localStorage.removeItem(key)
            return null
        }
    }
    catch (err) {
        return null
    }
}

export {
    setLocalStorage,
    getLocalStorage,
    encryptData,
    decryptData
}