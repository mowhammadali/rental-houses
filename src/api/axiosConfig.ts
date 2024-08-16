import axios from "axios";

class ContentApi {
    private static _instance = axios.create({
        baseURL: "https://6606fe26be53febb857efe71.mockapi.io/villasun-rent-house/v1/",
        timeout: 8000,
        headers: {
            Accept: "application/json",
        },
    });

    static get instance () {
        return ContentApi._instance;
    }
}

class AccountApi {
    private static _instance = axios.create({
        baseURL: "https://api.escuelajs.co/api/v1/",
        timeout: 8000,
        headers: {
            Accept: "application/json",
        },
    });

    static get instance () {
        return AccountApi._instance;
    }
}

export {ContentApi , AccountApi};