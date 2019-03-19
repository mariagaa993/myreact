import React, { Component } from 'react';
import Table from './Table';
import Form from './Form'; 



class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i!== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
    
  
  render() {
    const { characters } = this.state;
      
      return (
        <div className="container">
        <h1>Mi primera app de ReactJs desde cero</h1>
        <p>Aquí mostrará los nombres y apellidos que ingresen en el formulario.</p>
        <Table 
             characterData={characters} 
             removeCharacter={this.removeCharacter} 
             />
             <h3>Agregar nombre y apellido</h3>
             <Form handleSubmit = { this.handleSubmit } />
        </div>
      );
    }
  }
export default App;
// es importante que los componentes esten en archivos separados