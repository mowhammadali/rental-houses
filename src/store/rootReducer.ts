import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
    authState: authReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;