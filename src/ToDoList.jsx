import React from 'react';

function ToDoList(props) {
    let allItems = props.toDoItems.map(item => (
       <li>
        {item.itemName} is due on {item.dayOfWeek}
        <button type="button" onClick={() => props.onDelete(item.itemName)}>Delete</button>
        <form>
            <input type="text" placeholder="Enter Changes" onChange={props.onUpdate}></input>
        </form>
        <button type="button" onClick={() => props.onItemUpdate(item.itemName)}>Update</button>
       </li> 
    ))
    return(
        <ul>
         {allItems} 
        </ul>   
    )
}

export default ToDoList;