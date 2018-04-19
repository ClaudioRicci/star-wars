import React from 'react';
import ReactDOM from 'react-dom';
import './pane.scss';
import data from './characters.json';
import DarthVaderImage from './Icons/vader.svg';

export class DarthVader extends React.Component {

  render() {
    const result = data.find((item) => {
        return item.name === 'Darth Vader';
    });

      return (
          <div className="outerContainer">
            <div className="characterPanel"> 
              <div className="characterIcon">
                <DarthVaderImage className="iconResize"/>
              </div>
              <div className="characterDetails">
                <div key={result.id}><h2>{result.name}</h2><p>{result.score} Points</p></div>
              </div>
            </div>
          </div>
      );
  }
};
export default DarthVader;