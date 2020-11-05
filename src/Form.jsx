
function Form(props) {
    return(
        <div>
            <input type="text" onChange={props.onItemInputChange}/>
            <button onClick={props.onAdd}>Add</button>
            
            <label for="dayOfWeek">Due Date</label>
            <select name="dayOfWeek" onChange={props.onSelect}>
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

export default Form