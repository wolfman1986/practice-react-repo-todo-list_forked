import React from 'react';

function DayList(props) {
    let dayArray = props.toDoItems.filter(item => props.selectDayOfWeek === item.dayOfWeek)
    let dayTaskList = dayArray.map(item => <li>{item.itemName} is due on {item.dayOfWeek}</li>)

    return(
        <ul>
            {dayTaskList}
        </ul>
    )
}

export default DayList; 