import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import photoNeeded from '../Icons/photo_needed.jpg'

import './playerTwo.scss';

export class PlayerTwo extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      imageAlt: 'Photo Needed'
    	};
	};	
  
    render() {
          return (
            <div>
            	<span className="playerName">Claudio2</span>
            	<img src={ photoNeeded } alt={ this.state.imageAlt } />
				<span className="victoryLight">&#8226;</span>       	
            </div>
          );
      }
};

export default PlayerTwo;