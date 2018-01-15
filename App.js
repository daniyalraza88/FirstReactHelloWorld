import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      todo: []
      // num1 : 0,
      // num2 : 0,
      // num : 0
      // name : ""
    }
    this.plschange.bind(this)
  }
 addTodo(ev){
  //  ev.preventDefault(ev)
      console.log(ev)
    }
  render() {
   let input;

   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        {/*<input ref="userinput" onChange={()=>{ this.setState({name : this.refs.userinput.value}) }} />

        <button onClick={()=>{ setInterval( ()=> {this.setState({num : this.state.num + 1})},0.000001) }} > + </button>
      <h1> {this.state.num}  </h1> 
      <h1> {this.state.name}  </h1> */}
      {/*<input ref="num1" type="number"/>
      <button onClick={()=>{ this.setState({num : this.refs.num1.value + this.refs.num2.value}) }} > + </button>
      <button onClick={()=>{ this.setState({num : this.refs.num1.value - this.refs.num2.value}) }} > - </button>
      <button onClick={()=>{ this.setState({num : this.refs.num1.value * this.refs.num2.value}) }} > x </button>
      <button onClick={()=>{ this.setState({num : this.refs.num1.value / this.refs.num2.value}) }} > / </button>
      <input ref="num2" type="number"/>
<h1> {this.state.num} </h1> */}
{/*<input ref="inp" onChange={()=>{this.setState({todo : this.refs.inp.value})}} />*/}
{/*<input ref="inp" onChange={()=>{ this.state.todo.push(this.refs.inp.value), console.log(this.state.todo) }} />*/}
{/*<input type="text" ref="inp" onChange={this.plschange()}/>*/}
<input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}> + </button>

<button> add </button>
<li> {this.state.todo} </li>


      </div>
    );
  }
}

export default App;
