export type Extend<T, U> = T & U;

export type UseAuthOutputtype = {
    isAuthenticated: boolean;
    loading: boolean;
};

export type RegisterInputstype = {
    name: string;
    email: string;
    password: string;
    avatar: string;
};

export type ThemeCustomHooksType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    isDark: boolean;
};

export type HouseType = {
    removable: boolean;
    hostId: string;
    image: string;
    rate: number;
    discount: number;
    state: string;
    city: string;
    description: string;
    price: string;
    facilities: {
        water: boolean;
        gas: boolean;
        electricity: boolean;
        tv: boolean;
        radiator: boolean;
        cooler: boolean;
        sofa: boolean;
        bathroom: boolean;
        kitchenStuffs: boolean;
        refrigerator: boolean;
        parkingLot: boolean;
        pool: boolean;
        sittingToilet: boolean;
        handFootball: boolean;
        barbecue: boolean;
        balcony: boolean;
    };
    coordinates: {
        lat: number;
        long: number;
    };
    rules: {
        natinonalCard: boolean;
        tobacco: boolean;
        pet: boolean;
        celebration: boolean;
        reception: boolean;
    };
    details: {
        about: string;
        capacity: number;
        bedServices: {
            doubleBed: number;
            singleBed: number;
            mattress: number;
        };
        toilet: {
            iranianToilet: number;
            sittingToilet: number;
            bathroom: number
        };
    };
    owner: string;
    id:string;
};
