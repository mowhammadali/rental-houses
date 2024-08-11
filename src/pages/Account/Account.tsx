import { useEffect, useState } from "react";
import MobileAccount from "./features/mobile-page/MobileAccount";

const Account = (): JSX.Element => {
    const [screenSize , setScreenSize] = useState<number>(window.innerWidth);

    const updateSize = () => setScreenSize(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize' , updateSize);

        return () => window.removeEventListener('resize' , updateSize);
    } , [])
    
    if (screenSize > 768) return <div>desktop account</div>

    return <MobileAccount />
}

export default Account;