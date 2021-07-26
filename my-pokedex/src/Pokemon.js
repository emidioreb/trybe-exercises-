import React from 'react';
import PropTypes from 'prop-types';
// desestruturação
// não tenho ligação direta com os dados
class Pokemon extends React.Component {
  render() {
    const {pokemon} = this.props;
    // Fizemos um map no nosso array de pokemons
    // que vai renderizar o componente Pokemon para cada item do array.
    // Então, recebemos a props "pokemon" que é um objeto do array de pokemons
    // Nesses objetos temos informações como name, type e etc, então
    // desestruturamos essas informações e renderizamos em uma tag HTML,
    // no caso, utilizamos um <p>.

    return (
      <div className="pokemon">
        <div>
          <p>{ pokemon.name }</p>
          <p>{ pokemon.type }</p>
          <p>
            {`Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ pokemon.image } alt={ `${pokemon.name} sprite` } />
      </div>
    );
  }
}

export default Pokemon;

