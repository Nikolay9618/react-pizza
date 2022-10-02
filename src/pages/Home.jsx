import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';

function HomePage() {

   const categoryIdD = useSelector(state => state.filter.categoryId);

   console.log(categoryIdD);


   const [pizzas, setPizzas] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const [sortType, setSortType] = useState({ name: 'популярности', sortType: 'rating' });
   const [categoryId, setCategoryId] = useState(0);
   const [currentPage, setcurrentPage] = useState(1);

   const { searchValue, setSearchValue } = useContext(SearchContext);


   useEffect(() => {
      setIsLoading(true);
      fetch(searchValue
         ? `https://6338670f132b46ee0bef8b7c.mockapi.io/items?search=${searchValue}`
         : `https://6338670f132b46ee0bef8b7c.mockapi.io/items?page=${currentPage}&limit=4${categoryId > 0 ? `&category=${categoryId}` : ''}&sortby=${sortType.sort}&order=asc`)
         .then((res) => res.json())
         .then((arr) => { setPizzas(arr); setIsLoading(false) }
         );
   }, [categoryId, sortType, searchValue, currentPage]);



   const items = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
   const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);



   return (
      <>
         <div className="content__top">
            <Categories value={categoryId} setCategoryId={(i) => setCategoryId(i)} />
            <Sort value={sortType} setSortType={(i) => setSortType(i)} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               isLoading
                  ? skeleton
                  : items
            }
         </div>
         <Pagination setcurrentPage={(i) => setcurrentPage(i)} />
      </>
   )
}

export default HomePage;