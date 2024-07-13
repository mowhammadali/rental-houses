export type Extend <T , U> = T & U;

export type UseAuthOutputtype = {
    isAuthenticated: boolean,
    loading: boolean,
}

export type RegisterInputstype = {
    name: string,
    email: string,
    password: string,
    avatar: string,
}

export type ThemeCustomHooksType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    isDark: boolean;
}