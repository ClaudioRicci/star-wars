import React from 'react';
import ReactDOM from 'react-dom';
import './pane.scss';
import data from './characters.json';
import BobaFettImage from './Icons/fett.svg';

export class BobaFett extends React.Component {

  render() {
    const result = data.find((item) => {
        return item.name === 'Boba Fett';
    });

      return (
          <div>
            <div className="characterPanel"> 
              <div className="characterIcon">
                <BobaFettImage className="iconResize"/>
              </div>
              <div className="characterDetails">
                <div key={result.id}><h2>{result.name}</h2><p>{result.score} Points</p></div>
              </div>
            </div>
          </div>
      );
  }
};
export default BobaFett;