import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json'
import TodoForm from './components/TodoForm';

class App extends Component {
constructor(){
  super();
  this.state={
    todos
  }
  this.handleAddTodo=this.handleAddTodo.bind(this);
}
removeTodo(index) {
   this.setState({
     todos: this.state.todos.filter((e, i) => {
       return i !== index
     })
   });

 }

 handleAddTodo(todo) {
   this.setState({
     todos: [...this.state.todos, todo]
   })
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

      <div className="container">
        <div className="row mt-4">

          <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
          </div>

          <div className="col-md-8">
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
