import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import './sets.scss';

export class Sets extends React.Component {
  
    render() {
          return (
            <div>
               <span className="sets">4-11 | 11-3 | 11-7 | 3-11 | 11-8 | 11-2</span> 
            </div>
          );
      }
};

export default Sets;