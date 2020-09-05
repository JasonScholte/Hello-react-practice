import React, { useReducer } from 'react';
 import Nav from "./components/Navbar";
 import todoItem from "./components/Todo";
 import TodoItem from "./components/Todo";
// import './App.css';
import avatar from "./img/guy.png";


// const user = {
//   firstName: "Jay",
//   lastName: "Scholte",
//   avatar: avatar,

// };

// const todoList = [
//   {
//     id: 1,
//     description: "learn body proportions",
//     isCompleted: false
//   },
//   {
//     id: 2,
//     description: "learn shading",
//     isCompleted: true
//   },
//   {
//     id: 3,
//     description: "learn drawing the head",
//     isCompleted: false
//   },
// ];



class App extends React.Component {
  state = {
    user: {
      firstName: "Jay",
      lastName: "Scholte",
      avatar: avatar,
  },
  todoList: [
    {
      id: 1,
      description: "learn body proportions",
      isCompleted: false
    },
    {
      id: 2,
      description: "learn shading",
      isCompleted: true
    },
    {
      id: 3,
      description: "learn drawing the head",
      isCompleted: false
    },
  ],
}
  render () {
  return (
    <div style={styles.pageWrap}>
    <Nav user={this.state.user} />
    <div style={styles.listContainer}>
      <h1 style={styles.listTitle}>To Do List</h1>
      <ul>
      {this.state.todoList.map((todoItem) => (
        <TodoItem todoItem={todoItem} />
         ))}
      </ul>
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
    marginTop: "4rem",
    minHeight: "50vh",
    margin:"5 5", 
    padding: "0 3rem",
    paddingTop: "1rem",
    background: "#FFFDFD",
    boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  listTitle:{
    marginBottom: ".5rem",
    borderBottom: "1px solid black",
  },
};

export default App;
