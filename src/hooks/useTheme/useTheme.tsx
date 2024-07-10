import { useEffect, useState } from "react";
import { ThemeCustomHooksType } from "../../types/commonTypes";

const useTheme = (): ThemeCustomHooksType => {
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "system";
    });

    useEffect(() => {
        const root = document.documentElement;

        const applyTheme = function (theme: string) {
            if (theme === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                root.setAttribute('data-theme' , prefersDark ? 'dark' : 'light');
            }
            else {
                root.setAttribute('data-theme', theme);
            }
        } 

        applyTheme(theme);
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    return {theme , setTheme};
};

export default useTheme;