import { useEffect, useState } from "react";

const Account = (): JSX.Element => {
    const [screenSize , setScreenSize] = useState<number>(window.innerWidth);

    const updateSize = () => setScreenSize(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize' , updateSize);

        return () => window.removeEventListener('resize' , updateSize);
    } , [])
    
    if (screenSize > 768) return <div>desktop account</div>

    return <div>mobile account</div>
}

export default Account;