import React from 'react'
import useAuth from './hooks/useAuth';
import { UseAuthOutputtype } from './types/commonTypes';

const AuthContext = React.createContext<UseAuthOutputtype | null>(null);

const App = (): JSX.Element => {
    const {isAuthenticated , loading} = useAuth();

    return (
        <AuthContext.Provider value={{isAuthenticated , loading}}>
            <div></div>
        </AuthContext.Provider>
    )
}

export default App;