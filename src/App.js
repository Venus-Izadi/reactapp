import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {TodoForm, TodoList} from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: "Have fun with JSX", isComplete: true },
        { id: 2, name: "Build an Awesome App", isComplete: false },
        { id: 3, name: "Ship It!", isComplete: false }
      ],
      currentTodo: ""
    };
  }

  onChangeHandle(event) {
    this.setState({
      currentTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          React Todo List
        </header>
        <div className="Todo-App">
          <TodoForm onChangeHandle={this.onChangeHandle.bind(this)} currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
