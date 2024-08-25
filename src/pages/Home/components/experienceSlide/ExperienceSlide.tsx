import css from './ExperienceSlide.module.css';

type PropsType = {
    id: number;
    image: string;
    title: string;
    context: string;
}

const ExperienceSlide = ({image , title , context }: PropsType): JSX.Element => {
    return (
        <div className={css.slide}>
            <img className={css.image} src={image} alt='experience'/>
            <div className={css.content}>
                <p className={css.caption}>تجربه</p>
                <h4 className={css.title}>{title}</h4>
                <p className={css.context}>{context}</p>
            </div>
        </div>
    )
}

export default ExperienceSlide;