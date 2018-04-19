import React from 'react';
import ReactDOM from 'react-dom';
import './pane.scss';
import data from './characters.json';
import DarthVaderImage from './Icons/vader.svg';

export class DarthVader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Darth Vader'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    const result = data.find((item) => {
        return item.name === 'Darth Vader';
    });

      return (
          <div>
            <div className="characterPanel"> 
              <div className="characterIcon">
                <DarthVaderImage className="iconResize"/>
              </div>
              <div className="characterDetails">
                <div key={result.id}><input value={this.state.name} onChange={this.handleChange} /><p>{result.score} Points</p></div>
              </div>
            </div>
          </div>
      );
  }
};
export default DarthVader;