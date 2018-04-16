import React from 'react';
import ReactDOM from 'react-dom';
import './tabs.scss';
import data from './characters.json';

export class Tabs extends React.Component {

 /*constructor(props) {
    super(props);

    this.state = {
      characters: [],
      isLoading: false,
      error: null
    };
  }


  componentDidMount() {
      const data = axios.create({
        baseURL: 'http://localhost:8080/'
      })
      data.get('characters.js')
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
/*  const { characters, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
*/
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