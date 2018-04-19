import React from 'react';
import ReactDOM from 'react-dom';
import { BB8 } from './BB8';
import { C3P0 } from './C3P0';
import { DarthVader } from './DarthVader';
import { BobaFett } from './BobaFett';
import { R2D2 } from './R2D2';

import './pane.scss';

export class MobileList extends React.Component {

  render() {
      return (
          <div className="innerContainer">
            <C3P0/>  
            <DarthVader/>
            <BB8/>            
            <BobaFett/>
            <R2D2/>
          </div>
      );
  }
};
export default MobileList;