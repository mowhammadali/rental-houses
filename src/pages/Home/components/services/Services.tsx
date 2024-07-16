import { useEffect, useState } from 'react';
import css from './Services.module.css';

type ServicesListType = {src: string, title: string}[];

const Services = (): JSX.Element => {
    const [screenWidth , setScreenWidth] = useState<number>(window.innerWidth);
    const [services] = useState<ServicesListType>([
        {src: 'forest' , title: 'جنگلی'},
        {src: 'apartment' , title: 'آپارتمان'},
        {src: 'cottage' , title: 'کلبه'},
        {src: 'villa' , title: 'ویلا'},
        {src: 'discount' , title: 'پیشنهاد ویژه'},
        {src: 'beach' , title: 'ساحلی'},
        {src: 'experience' , title: 'تجربه'},
        {src: 'pool' , title: 'استخردار'},

    ])

    const resizeHandler = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize' , resizeHandler);

        return () => window.removeEventListener('resize' , resizeHandler);
    } , [])
    
    return (
        <div className={css.servicesContainer}>
            {
                services.map((service , index) => (
                    <div key={index} className={css.serviceWrapper}>
                        <img src={`./assets/icons/services/services-${service.src}-${screenWidth > 576 ? '50' : '50'}.png`}/>
                        <p className={css.seviceTitle}>{service.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Services;