import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
    isVerified: boolean;
}

const initialState: InitialStateType = {
    isVerified: false,
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isVerified = true;
        },
        signOut: (state) => {
            state.isVerified = false;
        }
    }
})

export const { signIn , signOut } = authReducer.actions;
export default authReducer.reducer;