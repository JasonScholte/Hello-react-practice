import React from "react";

function TodoItem (props) {
  return(
    <li key={props.todoItem.id} style={styles.item}>
    <input 
    style={styles.checkbox} 
    type="checkbox" 
    checked={props.todoItem.completed} />
    <span style={
      props.todoItem.isCompleted
       ? styles.completed 
       : styles.notCompleted
       }
       >
         {props.todoItem.description}
         </span>
  </li>);
}

export default TodoItem;


const styles = {
item: {
  marginBottom: ".5rem",
  padding: "1rem 1.2rem",
  background: "#FFFFFF",
  border: "1px solid #74C0EB",
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