import React from 'react'
import useAuth from './hooks/useAuth';
import Home from './pages/Home/Home';
import Form from './pages/Register/features/form/Form';
import { Routes , Route } from 'react-router-dom';
import { UseAuthOutputtype } from './types/commonTypes';

const AuthContext = React.createContext<UseAuthOutputtype | null>(null);

const App = (): JSX.Element => {
    const {isAuthenticated , loading} = useAuth();

    return (
        <AuthContext.Provider value={{isAuthenticated , loading}}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Form />}/>
            </Routes>
        </AuthContext.Provider>
    )
}

export default App;