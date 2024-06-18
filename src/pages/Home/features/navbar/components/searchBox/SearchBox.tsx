import { ChangeEvent, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import css from './SearchBox.module.css';

const SearchBox = (): JSX.Element => {
    const [searchContent , setSearchContent] = useState<string>('');

    const changeSearchContent = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchContent(event.target.value);
    }

    return (
        <section className={css.searchWrapper}>
            <button className={css.searchButton}>
                <IoIosSearch className={css.searchIcon}/>
            </button>
            <input type='text' className={css.searchField} value={searchContent}
                placeholder='جستجوی شهر..' onChange={changeSearchContent}/>
        </section>
    )
}

export default SearchBox