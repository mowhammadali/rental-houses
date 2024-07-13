import { useEffect, useState } from "react";
import { ThemeCustomHooksType } from "../../types/commonTypes";

const useTheme = (): ThemeCustomHooksType => {
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme: string | null = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "system";
    });
    
    const [isDark , setIsDark] = useState<boolean>(() => {
        const saveTheme: string | null = localStorage.getItem("theme");
        return saveTheme === 'dark' ? true : saveTheme === 'light' ? false : window.matchMedia('(prefers-color-scheme: dark)').matches;
    })

    useEffect(() => {
        const root = document.documentElement;

        const applyTheme = function (theme: string) {
            if (theme === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setIsDark(prefersDark);
                root.setAttribute('data-theme' , prefersDark ? 'dark' : 'light');
            }
            else {
                setIsDark(theme === 'dark');
                root.setAttribute('data-theme', theme);
            }
        } 

        applyTheme(theme);
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    return {theme , setTheme , isDark};
};

export default useTheme;