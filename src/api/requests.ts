import { AccountApi } from "./axiosConfig";
import { RegisterInputstype } from "../types/commonTypes";
import { AxiosError } from "axios";
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