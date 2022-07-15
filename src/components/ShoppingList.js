import React,{ useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[category,setCategory]=useState("All");

 const newItems= items.filter(item=>{
 return category==="All"?true:category===item.category
  })

 // console.log(newItems)

 function handleFilter(e) {
  setCategory(e.target.value)
  
 }
 //console.log(category)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
