import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import photoNeeded from '../Icons/photo_needed.jpg'

import './playerOne.scss';

export class PlayerOne extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      imageAlt: 'Photo Needed'
    	};
	};

    render() {
          return (
            <div>
				<span className="victoryLight">&#8226;</span>
             	<img src={ photoNeeded } alt={ this.state.imageAlt } />         	
            	<span className="playerName">Claudio</span>
            </div>
          );
      }
};

export default PlayerOne;