import { AccountApi, ContentApi } from "./axiosConfig";
import { RegisterInputstype } from "../types/commonTypes";
import { AxiosError } from "axios";

// *** Account Api ***
// register user
export const registerUser = async (userData: RegisterInputstype) => {
    try {
        const response = await AccountApi.instance.post('users/' , userData);
        return response;
    }
    catch (error) {
        const err = error as AxiosError;
        throw err;
    }
}

// login user
export const loginUser = async (userData: Omit<RegisterInputstype , 'avatar' | 'name'>) => {
    try {
        const response = await AccountApi.instance.post('auth/login' , userData);
        return response;
    }
    catch (error) {
        const err = error as AxiosError;
        throw err;
    }
}

// get user info
export const getUserData = async (accessToken: string) => {
    try {
        const response = await AccountApi.instance.get('auth/profile' , {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        return response;
    }
    catch (error) {
        const err = error as AxiosError;
        throw err;
    }
}

// *** Content Api ***
// get all advertisements
export const getAllAdvertisements = async () => {
    try {
        const response = await ContentApi.instance.get('houses');
        return response;
    }
    catch (error) {
        const err = error as AxiosError;
        throw err;
    }
}