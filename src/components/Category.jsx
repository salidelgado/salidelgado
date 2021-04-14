import React from 'react'
import './../assets/styles/components/Category.scss';

const Category = ({title}) =>(
  <div className="categories">
      <h3 className="categories__title">{title}</h3>
  </div>


);

export default Category;