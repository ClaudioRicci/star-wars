import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import deleteIcon from '../Icons/bin.jpg'

import './deleteButton.scss';

export class DeleteButton extends React.Component {
  
    render() {
          return (
            <div>
             	<img className="deleteButton" src={ deleteIcon } alt="Delete Game" />             	
            </div>
          );
      }
};

export default DeleteButton;