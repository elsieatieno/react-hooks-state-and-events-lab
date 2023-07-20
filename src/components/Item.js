import React, {useState} from "react";

function Item({ name, category }) {
const[addItem, setAddItem] =useState(false)
const handleAddItem = () =>{
  setAddItem(!addItem)
}

  return (
    <li className={addItem ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>
        { addItem ? "Add to Cart": "Remove From Cart"}
        </button>
    </li>
  );
}

export default Item;
