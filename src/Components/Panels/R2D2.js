import React from 'react';
import ReactDOM from 'react-dom';
import './pane.scss';
import data from './characters.json';
import R2D2Image from './Icons/r2-d2.svg';

export class R2D2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'R2-D2'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }
  
  render() {
    const result = data.find((item) => {
        return item.name === 'R2-D2';
    });

      return (
          <div>
            <div className="characterPanel lastPanel"> 
              <div className="characterIcon">
                <R2D2Image className="iconResize"/>
              </div>
              <div className="characterDetails">
                <div key={result.id}><input value={this.state.name} onChange={this.handleChange} /><p>{result.score} Points</p></div>
              </div>
            </div>
          </div>
      );
  }
};
export default R2D2;