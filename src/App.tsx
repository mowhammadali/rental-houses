import React from 'react'
import useAuth from './hooks/useAuth/useAuth';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Form from './pages/Register/features/form/Form';
import Login from './pages/Login/Login';
import Loading from './pages/Loading/Loading';
import { Routes , Route } from 'react-router-dom';
import { UseAuthOutputtype } from './types/commonTypes';

export const AuthContext = React.createContext<UseAuthOutputtype | null>(null);

const App = (): JSX.Element => {
    const {isAuthenticated , loading} = useAuth();
    
    if (loading) return <Loading />

    return (
        <AuthContext.Provider value={{isAuthenticated , loading}}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Home />}/>
                    <Route path='register' element={<Form />}/>
                    <Route path='login' element={<Login />}/>
                </Route>
            </Routes>
        </AuthContext.Provider>
    )
}

export default App;