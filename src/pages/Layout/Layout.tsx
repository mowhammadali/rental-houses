import React from 'react'
import useTheme from '../../hooks/useTheme/useTheme';
import { Outlet } from 'react-router-dom';
import { ThemeCustomHooksType } from '../../types/commonTypes';
import 'swiper/css';
import 'react-loading-skeleton/dist/skeleton.css';

export const ThemeContext = React.createContext<ThemeCustomHooksType | null>(null);

const Layout = () => {
    const {theme , setTheme , isDark} = useTheme();

    return (
        <ThemeContext.Provider value={{theme , setTheme , isDark}}>
            <Outlet />
        </ThemeContext.Provider>
    )
}

export default Layout;