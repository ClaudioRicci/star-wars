import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import './title.scss';

export class Title extends React.Component {
  
    render() {
          return (
            <div>
               <h1>Latest games</h1>
            </div>
          );
      }
};

export default Title;