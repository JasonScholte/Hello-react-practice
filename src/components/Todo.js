import React from "react";

function TodoItem (props) {
  const handleCheckTodo = () => props.onCheckTodo(props.todoItem.id);
  return(
    <li key={props.todoItem.id} style={styles.item}>
    <input 
    style={styles.checkbox} 
    type="checkbox" 
    defaultChecked={props.todoItem.completed} 
    onChange={handleCheckTodo}/>
    <span style={
      props.todoItem.isCompleted
       ? styles.completed 
       : styles.notCompleted
       }
       >
         {props.todoItem.description}
         </span>
         <button>delete</button>
  </li>);
}

export default TodoItem;


const styles = {
item: {
  margin: ".5rem",
  padding: ".5rem .5rem",
  background: "#FFFFFF",
  // border: "1px solid #74C0EB",
  boxSizing: "border-box",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
},
checkbox:{
marginRight: ".3rem",
},
notCompleted:{
fontSize: ".9rem",
},
completed:{
color: "#DBD3D8",
textDecoration: "line-through",
},
}