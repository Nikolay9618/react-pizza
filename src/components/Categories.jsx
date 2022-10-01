import React, { useState } from 'react'


function Categories() {

   const [activeIndex, setActiveIndex] = useState(0);

   const arrCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

   return (
      <div className="categories">
         <ul>
            {arrCategories.map((el, i) => {
               return (
                  <li key={i} onClick={() => setActiveIndex(activeIndex => arrCategories.indexOf(el))} className={activeIndex === arrCategories.indexOf(el) ? 'active' : ''}>{el}</li>
               )
            })}
         </ul>
      </div>
   )
}

export default Categories;