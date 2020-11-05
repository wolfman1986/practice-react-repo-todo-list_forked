import React from 'react'
import ToDoList from './ToDoList'
import Form from './Form'
import DayListSelect from './DayListSelect'
import DayList from './DayList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoItems: [
      ], 
      itemInput: '',
      dayOfWeek: 'Monday'
    }
  }

  handleItemInputChange = (event) => {
    event.preventDefault() 
    this.setState({itemInput: event.target.value})
  }

  handleAdd = (event) => {
    event.preventDefault()     
    this.setState({toDoItems: this.state.toDoItems.concat({itemName: this.state.itemInput, 
                                                          dayOfWeek: this.state.dayOfWeek})})
  }

  handleDelete = (item) => {
    let newState = this.state.toDoItems
    newState = newState.filter(toDoItem => toDoItem.itemName !== item) //filter out the item that matches the one you want to delete 
    this.setState({toDoItems: newState})
  }

  handleUpdate = (item) => {
    let newState = this.state.toDoItems
    newState = newState.map(toDoItem => {
      if(toDoItem.itemName === item) {
        toDoItem.itemName = this.state.itemInput
      }
      return toDoItem 
    })
    this.setState({toDoItems: newState})
  }

  handleDayChange = (event) => {
    this.setState({dayOfWeek : event.target.value})
  }

  handleDayListChange = (event) => {
    this.setState({selectDayOfWeek: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ToDoList toDoItems={this.state.toDoItems} 
                  onDelete={this.handleDelete}
                  onUpdate={this.handleItemInputChange}
                  onItemUpdate={this.handleUpdate}
        />
        <Form onItemInputChange={this.handleItemInputChange} 
              onAdd={this.handleAdd}
              onSelect={this.handleDayChange}
        />
        <DayListSelect onDayListSelect={this.handleDayListChange}/>
        <DayList selectDayOfWeek={this.state.selectDayOfWeek} toDoItems={this.state.toDoItems}/>
      </div>
    );
  }
}

export default App;
