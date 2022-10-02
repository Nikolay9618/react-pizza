import React, { useState } from 'react'


function Categories({ value, setCategoryId }) {

   const arrCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

   return (
      <div className="categories">
         <ul>
            {arrCategories.map((el, i) => {
               return (
                  <li key={i} onClick={() => setCategoryId(i)} className={value === arrCategories.indexOf(el) ? 'active' : ''}>{el}</li>
               )
            })}
         </ul>
      </div>
   )
}

export default Categories;