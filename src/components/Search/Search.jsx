
import { useContext } from 'react';
import styles from './Search.module.scss'
import { SearchContext } from '../../App';

const Search = () => {

   const { searchValue, setSearchValue } = useContext(SearchContext);

   return (
      <div className={styles.root} >
         <input
            className={styles.input}
            placeholder="Поиск пиццы..."
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
         />
         {searchValue !== '' && (
            <svg onClick={() => setSearchValue('')} className={styles.clearIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
               <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" />
            </svg>
         )}
      </div>
   )
};

export default Search;