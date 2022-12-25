import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice'


function Categories() {

   const arrCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
   const dispatch = useDispatch()
   const categoryId = useSelector(state => state.filter.categoryId)

   return (
      <div className="categories">
         <ul>
            {arrCategories.map((el, i) => {
               return (
                  <li key={i} onClick={() => dispatch(setCategoryId(i))} className={categoryId === arrCategories.indexOf(el) ? 'active' : ''}>{el}</li>
               )
            })}
         </ul>
      </div>
   )
}

export default Categories;