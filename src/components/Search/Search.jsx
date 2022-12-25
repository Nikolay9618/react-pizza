
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss'
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

const Search = () => {

   const [value, setValue] = useState('');
   const { searchValue, setSearchValue } = useContext(SearchContext);
   const inputRef = useRef();

   const onClickClear = () => {
      setSearchValue('');
      setValue('');
      inputRef.current.focus();
   };

   useEffect(() => {
      onClickClear()
   }, [])

   const updateSearchValue = useCallback(
      debounce((str) => {
         setSearchValue(str);
      }, 700),
      [],
   )

   const onChangeInput = event => {
      setValue(event.target.value);
      updateSearchValue(event.target.value);
   }


   return (
      <div className={styles.root} >
         <input
            ref={inputRef}
            className={styles.input}
            placeholder="Поиск пиццы..."
            type="text"
            value={searchValue}
            onChange={(e) => onChangeInput(e.target.value)}
         />
         {searchValue !== '' && (
            <svg onClick={onClickClear} className={styles.clearIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
               <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" />
            </svg>
         )}
      </div>
   )
};

export default Search;