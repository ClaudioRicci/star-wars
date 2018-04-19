import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BB8 } from './BB8';
import { C3P0 } from './C3P0';
import { DarthVader } from './DarthVader';
import { BobaFett } from './BobaFett';
import { R2D2 } from './R2D2';

import './pane.scss';

export class PanelRoutes extends React.Component {
    render() {
          return (
            <Router>
                <div>
                    <nav>
                        <li>
                          <Link to="/C_3P0">C3P0</Link>
                        </li>
                        <li>
                          <Link to="/Darth_Vader">Darth Vader</Link>
                        </li>
                        <li>
                          <Link to="/BB_8">BB-8</Link>
                        </li>
                        <li>
                          <Link to="/Boba_Fett">Boba Fett</Link>
                        </li>
                        <li>
                          <Link to="/R2_D2">R2-D2</Link>
                        </li>               
                    </nav>       
                    <Route exact path="/" component={C3P0} />
                    <Route path="/C_3P0" component={C3P0} />
                    <Route path="/Darth_Vader" component={DarthVader} />
                    <Route path="/BB_8" component={BB8} />
                    <Route path="/Boba_Fett" component={BobaFett} />      
                    <Route path="/R2_D2" component={R2D2} />             
                </div>
            </Router>
          );
      }
};

export default PanelRoutes;