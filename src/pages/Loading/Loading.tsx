import HashLoader from "react-spinners/HashLoader";
import css from './Loading.module.css'
import useTheme from "../../hooks/useTheme/useTheme";
import { CSSProperties } from "react";

const cssOverride: CSSProperties = {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50% , -50%)'
  };

const Loading = (): JSX.Element => {
    useTheme();

    return (
        <div className={css.wrapper}>
            <HashLoader
                color={'#14b8a6'}
                loading={true}
                cssOverride={cssOverride}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;
