import React from "react";

function Nav(props) {

  return(

    <>
    <nav style={styles.container}>
      <img src={props.user.avatar} style={styles.avatar}></img>
      <h2 style={styles.userName}>{props.user.firstName} {props.user.lastName}</h2>
    </nav>
    </>
  )
}

export default Nav;

const styles = {
  container:{
    width: "auto",
    minHeight: "20vh",
    background: "#FFFFFF",
    boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    margin: ".5rem",
  },
  avatar:{
    width: "2rem",
    borderRadius: "2rem",
  },
  userName:{
    color: "fontColor",
    textAlign: "center",
  },
};