import React, { Fragment } from "react"; 
import './App.css';
import ListTodos from "./components/ListTodos"
import InputTodo from "./components/inputTodo"


function App() {
  return ( 
    <Fragment>
      <div className="container">
        <InputTodo/>
        <ListTodos/>
      </div>
    </Fragment>
  )
}

export default App;
