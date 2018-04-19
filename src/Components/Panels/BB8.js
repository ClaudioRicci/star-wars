import React from 'react';
import ReactDOM from 'react-dom';
import './pane.scss';
import data from './characters.json';
import BB8Image from './Icons/bb-8.svg';

export class BB8 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'BB-8'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    const result = data.find((item) => {
        return item.name === 'BB-8';
    });

      return (
          <div>
            <div className="characterPanel"> 
              <div className="characterIcon">
                <BB8Image className="iconResize"/>
              </div>
              <div className="characterDetails">
                <div key={result.id}><input value={this.state.name} onChange={this.handleChange} /><p>{result.score} Points</p></div>
              </div>
            </div>
          </div>
      );
  }
};
export default BB8;