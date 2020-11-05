
function DayListSelect(props) {
    return(
        <div>
            <p>Which day's tasks do you want to see?</p>
            <select name="dayOfWeek" onChange={props.onDayListSelect}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
            </select>
        </div>
    )
}

export default DayListSelect