import React from 'react'
import useAuth from './hooks/useAuth';
import Home from './pages/Home/Home';
import Form from './pages/Register/features/form/Form';
import Login from './pages/Login/Login';
import { Routes , Route } from 'react-router-dom';
import { UseAuthOutputtype } from './types/commonTypes';

export const AuthContext = React.createContext<UseAuthOutputtype | null>(null);

const App = (): JSX.Element => {
    const {isAuthenticated , loading} = useAuth();

    return (
        <AuthContext.Provider value={{isAuthenticated , loading}}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Form />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
        </AuthContext.Provider>
    )
}

export default App;