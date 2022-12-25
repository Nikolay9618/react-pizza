import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import qs from 'qs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';
import { setFilters } from '../redux/slices/filterSlice';
import { sortArr } from '../components/Sort';

function HomePage() {
   const navigate = useNavigate();
   const categoryId = useSelector(state => state.filter.categoryId);
   const sortType = useSelector(state => state.filter.sort);
   const pageCount = useSelector(state => state.filter.pageCount);
   const dispatch = useDispatch()

   const [pizzas, setPizzas] = useState([]);
   const [isLoading, setIsLoading] = useState(true);



   const { searchValue, setSearchValue } = useContext(SearchContext);


   useEffect(() => {

      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         if (params.hasOwnProperty('categoryId') && params.hasOwnProperty('pageCount') && params.hasOwnProperty('sortProperty')) {
            const sort = sortArr.find(obj => obj.sort === params.sortProperty)
            dispatch(
               setFilters({
                  ...params,
                  sort,
               })
            )
         }
      }
   }, [])

   useEffect(() => {
      setIsLoading(true);

      axios.get(searchValue
         ? `https://6338670f132b46ee0bef8b7c.mockapi.io/items?search=${searchValue}`
         : `https://6338670f132b46ee0bef8b7c.mockapi.io/items?page=${pageCount}&limit=4${categoryId > 0 ? `&category=${categoryId}` : ''}&sortby=${sortType.sort}&order=asc`)
         .then((res) => {
            setPizzas(res.data);
            setIsLoading(false);
         });

   }, [categoryId, sortType, searchValue, pageCount]);

   useEffect(() => {
      const queryString = qs.stringify({
         sortProperty: sortType.sort,
         categoryId,
         pageCount,
      })
      navigate(`?${queryString}`)
   }, [categoryId, sortType, pageCount])



   const items = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
   const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);



   return (
      <>
         <div className="content__top">
            <Categories />
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               isLoading
                  ? skeleton
                  : items
            }
         </div>
         <Pagination />
      </>
   )
}

export default HomePage;