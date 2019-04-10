import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      Using the map method, render one li element displaying the text property of each grocery
      object.
      {props.groceries.filter(item.purchased).map(item =>(
<li className="list-group-item" id={item.id}>
{item.name}
</li>
      ))}
    </ul>
  );
}

export default List;
