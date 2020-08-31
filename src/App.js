import React, { useReducer } from 'react';
import './App.css';
import avatar from "./img/guy.png";
const user = {
  firstName: "Jay",
  lastName: "Scholte",
  avatar: avatar,

};

const todoList = [
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
  }
]
function App() {
  return (
    <>
    {/* <div style={pageWrapStyles}> */}
    <nav style={navStyles.topNavContainer}>
      <img src={user.avatar} style={navStyles.navAvatar}></img>
      <h2 style={navStyles.navUserName}>{user.firstName} {user.lastName}</h2>
    </nav>
    <div style={listStyles.listContainer}>
      <h1 style={listStyles.listTitle}>ToDo List</h1>
      <ul style={listStyles.list}>
      {todoList.map(todoItems=>(
        <li key={todoItems.id} style={listStyles.listItem}>
          <input style={listStyles.listInput} type="checkbox" checked={todoItems.isCompleted} />
          <span style={todoItems.isCompleted ? listStyles.listCompleted : listStyles.listNotCompleted}>{todoItems.description}</span>
        </li>
      ))}
      </ul>
    </div>
  {/* </div> */}
    </>
  );
}
// const pageWrapStyles = {
//   // display: "flex",
//   background: "rgba(116, 192, 235, 0.5)",
// };

const navStyles = {
  topNavContainer:{
    minHeight: "20vh",
    background: "#FFFFFF",
boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    marginBottom: ".5rem",

  },
  navAvatar:{
    width: "2rem",
    borderRadius: "2rem",
  },
  navUserName:{
    color: "fontColor"
  },
};

const listStyles = {
  listContainer:{
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
  },
  list:{},
  listItem:{
    listStyleType: "none",
    marginBottom: ".5rem",
    background: "#FFFFFF",
border: "1px solid #74C0EB",
boxSizing: "border-box",
boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
borderRadius: "5px",
  },
listInput:{
  marginRight: ".3rem",
},
listItemNotCompleted:{
  fontSize: ".9rem",
},
listCompleted:{
color: "#DBD3D8",
textDecoration: "line-through",
},
};

export default App;
