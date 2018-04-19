import React from 'react';
import ReactDOM from 'react-dom';
import './pane.scss';
import data from './characters.json';
import C3POImage from './Icons/C3P-0.svg';

export class C3P0 extends React.Component {

  render() {
    const result = data.find((item) => {
        return item.name === 'C-3P0';
    });

      return (
          <div className="outerContainer">
            <div className="characterPanel"> 
              <div className="characterIcon">
                <C3POImage className="iconResize"/>
              </div>
              <div className="characterDetails">
                <div key={result.id}><h2>{result.name}</h2><p>{result.score} Points</p></div>
              </div>
            </div>
          </div>
      );
  }
};
export default C3P0;