    
    import React from 'react';
    import './App.css';

    const Task = (value) => { // Função feita para entrar dentro do componente App
      return ( // colocar esse return é obrigatório
        <li key={value}>{value}</li> // Li acompanhando da notação correta para ser inseridos valores
      );
    }
    // Criação do array com as atividades diárias
    const tarefas = ['Acordar', 'estudar', 'Ler', 'inglês'];

    class App extends React.Component { // Criação do componente APP
      render() { // colocar esse render é obrigatório
        return ( // colocar esse return é obrigatório
          <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul> // Ul é uma lista desordenada e os li ficam dentro dela
        ); // O map vai buscar cada atividade e adicionar na lista
      }
    }

    export default App; // Exportar o componente App