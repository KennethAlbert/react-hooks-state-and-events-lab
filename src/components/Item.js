import React,{ useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(true);
function handleAdd() {
setAddCart(!addCart)
//console.log(addCart)
}


  return (
    <li className={addCart?" ":"in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addCart?"add":"remove"} onClick={handleAdd}>{addCart?"Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
