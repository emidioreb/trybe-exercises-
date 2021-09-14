import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      valorInicial:0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState((estadoAnterior) => ({
      valorInicial: estadoAnterior.valorInicial + 1
    }))
  }
  render(){
    const { valorInicial } = this.state;
    console.log(this)
    return(
      <button onClick={this.handleClick}>{valorInicial}</button>
    )
  }
}


export default App;

