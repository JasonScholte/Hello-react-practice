import React from 'react';
import shortid from "shortid";
 import Nav from "./components/Navbar";
 import todoItem from "./components/Todo";
 import TodoItem from "./components/Todo";
// import './App.css';
import avatar from "./img/guy.png";
import { findAllByTestId } from '@testing-library/react';

class App extends React.Component {
  state = {
    user: {
      firstName: "Jay",
      lastName: "Scholte",
      avatar: avatar,
  },
  todoList: [
    {
      id: shortid.generate(),
      description: "learn body proportions",
      isCompleted: false
    },
    {
      id: shortid.generate(),
      description: "learn shading",
      isCompleted: true
    },
    {
      id: shortid.generate(),
      description: "learn drawing the head",
      isCompleted: false
    },
  ],
  newDescription: "",
};
handleChangeNewTodo = (event) => {
  const value = event.target.value
  this.setState({newDescription: value});
};
handleAddTodo = () => {
this.setState((state) => {
  return {
    todoList: [
      ...this.state.todoList, 
      {id: shortid.generate(), 
        description: this.state.newDescription, 
        isCompleted: false},
      ],
      newDescription: "",
  };
});
};

handleCheckTodo = (id) => {
  this.setState((state) => {
let newList = state.todoList.map((item) => {
  if (item.id === id){
    return {...item, isCompleted: !item.isCompleted};
  }
  return item;
});
return {todoList: newList};
  });
};
handleDeleteTodo = id =>{
  this.setState((state) => {
    let filteredList = state.todoList.filter((item) => {
      if (item.id === id){
        return false;
      }
return true;
    })
  })
}
  render () {
  return (
    <div style={styles.pageWrap}>
    <Nav user={this.state.user} />
    <div style={styles.listContainer}>
      <h1 style={styles.listTitle}>To Do List</h1>
      <ul>
      {this.state.todoList.map((todoItem) => (
        <TodoItem todoItem={todoItem} 
        onChangeheckTodo={this.handleCheckTodo}/>
         ))}
      </ul>
      <input 
      style={styles.itemInput} 
      onChange={this.handleChangeNewTodo} 
      value={this.state.newDescription}
      type="text" 
      />
    <button onClick={this.handleAddTodo} 
    style={styles.itemButton}>Add New</button>
  </div>
</div>
  );
}
}


const styles = {
  pageWrap: {
    display: "flex",

  },
  listContainer: {
    // marginTop: "4rem",
    margin: ".2rem",
    width: "auto",
    // minHeight: "50vh",
    // margin:"5 5", 
    // padding: "0 3rem",
    // paddingTop: ".5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFFDFD",
    boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  listTitle:{
    marginBottom: "1rem",
    // borderBottom: "1px solid black",
  },
  itemInput: {
    margin: ".2rem",
    width: "10rem",
  },
  itemButton: {
    margin: ".3rem",
  }
};

export default App;
