import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { PlayerOne, PlayerTwo, FinalScore, Sets, DeleteButton } from './../../index'

import './gameRow.scss';

export class GameRow extends React.Component {

    render() {
          return (
            <div className="gameRow">
            	<div className="rowLeft">
	            	<div className="playersRow">
						<PlayerOne/>
						<FinalScore/>
						<PlayerTwo/>
					</div>
					<div className="setsRow">
						<Sets/>
					</div>
				</div>
				<div className="rowRight">
					<DeleteButton/>
				</div>
            </div>
          );
      }
};

export default GameRow;