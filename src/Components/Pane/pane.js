import React from 'react';
import ReactDOM from 'react-dom';
import './pane.scss';
import data from './characters.json';
import BB8 from '-!react-svg-loader!./Icons/bb-8.svg';
import C3PO from '-!react-svg-loader!./Icons/C3P-0.svg';
import FETT from '-!react-svg-loader!./Icons/fett.svg';
import VADER from '-!react-svg-loader!./Icons/vader.svg';
import R2D2 from '-!react-svg-loader!./Icons/r2-d2.svg';

export class Pane extends React.Component {
  render() {
      return (
          <div className="outerContainer">
            <div className="characterPanel"> 
              <div className="characterIcon">
                <BB8/><C3PO/><FETT/><VADER/><R2D2/>
              </div>
              <div className="characterDetails">
                  {
                    data.map(function(character){
                      return <div key={character.id}><h2>{character.name}</h2><p>{character.score} Points</p></div>;
                    })
                  }
              </div> 
            </div>
          </div>
      );
  }
};
export default Pane;