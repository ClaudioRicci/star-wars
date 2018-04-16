import React from 'react';
import ReactDOM from 'react-dom';
import './tabs.scss';
import data from './characters.json';  // Works
import axios from 'axios' // Doesn't current work - would prefer to use this as axios Cross Browser compatible

export class Tabs extends React.Component {

 constructor(props) {
    super(props);
  
    this.state = {
      characters: [],
      isLoading: false,
      error: null
    };
  }

 /*  Needed more time to work on this - trying to use data drom 'Data' folder


  componentDidMount() {
      const data = axios.create({
        baseURL: 'http://localhost:8080'
      })
      data.get('Data/characters.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })    
      .then(data => this.setState({ characters: data.characters, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));      
       this.setState({ isLoading: true });     
  }
*/

  render() {
 const { characters, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

      return (
          <div>
            <nav>
            {
              data.map(function(character){
                return <li key={character.id}><a href={character.route}>{character.name}</a></li>;
              })
            }
            </nav>
          </div>
      );
  }
};
export default Tabs;