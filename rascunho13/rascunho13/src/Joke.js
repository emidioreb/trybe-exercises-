import React from 'react';

class Joke extends React.Component{
  constructor(){
    super()
    this.state = {
      joke: 'Piadola'
    }
  }
  
  render(){
    const { joke } = this.state;
    return(
      <span>{joke}</span>
    )
  }
}
export default Joke;