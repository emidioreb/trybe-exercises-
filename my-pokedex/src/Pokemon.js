import React from 'react'
import PropTypes from 'prop-types';

class poke extends React.Component {
  render(){
    const{poke} = this.props;
    return(
      <section>
        <p> 
          Nome: {poke.name} 
        </p>
      </section>
    )
  }
}

export default Pokemon;

