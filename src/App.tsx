import React from 'react'
import useAuth from './hooks/useAuth/useAuth';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Form from './pages/Register/features/form/Form';
import Login from './pages/Login/Login';
import Loading from './pages/Loading/Loading';
import Favorites from './pages/Favorites/Favorites';
import Wallet from './pages/Wallet/Wallet';
import Account from './pages/Account/Account';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import PrivateRoutes from './pages/Private/PrivateRoutes';
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
                    <Route path='unauthorized' element={<Unauthorized />}/>
                    <Route element={<PrivateRoutes />}>
                        <Route path='favorites' element={<Favorites />}/>
                        <Route path='wallet' element={<Wallet />}/>
                        <Route path='Account' element={<Account />}/>
                    </Route>
                </Route>
            </Routes>
        </AuthContext.Provider>
    )
}

export default App;