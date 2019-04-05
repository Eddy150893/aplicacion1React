import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json'

class App extends Component {
constructor(){
  super();
  this.state={
    todos
  }
}
  render() {
    const todos=this.state.todos.map((todo,i)=>{
      return (
      <div className="col-md-4">
      <div className="card mt-4">
        <div className="card-header">
        <h3>{todo.title}</h3>
        <span className="badge badge-pill badge-danger ml-2">
        {todo.priority}
        </span>
        </div>
        <div className="card-body">
        <p>{todo.descripcion}</p>
        <p><mark>{todo.responsable}</mark></p>
        </div>
      </div>
      </div>
      )
    })
    return (
      <div className="App">
      {/*<Navigation titulo="miprimeranavegacion"/>*/}
      <nav className="navbar navbar-dark bg-dark ">
        <a href="" className="text-white">
          Tasks
          <span className="badge badge-pill badge-light ml-2">
          {this.state.todos.length}
          </span>
        </a>
      </nav>
          <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
