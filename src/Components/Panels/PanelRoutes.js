import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BB8 } from './BB8';
import { C3P0 } from './C3P0';
import { DarthVader } from './DarthVader';
import { BobaFett } from './BobaFett';
import { R2D2 } from './R2D2';
import { MobileList } from './MobileList';

import './pane.scss';

export class PanelRoutes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameOne: 'C-3P0',
      nameTwo: 'Darth Vader',
      nameThree: 'BB-8',
      nameFour: 'Boba Fett',
      nameFive: 'R2-D2'               
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }  
    render() {
          return (
            <Router>
                <div>
                    <nav>
                        <li>
                          <Link to="/C_3P0"><input class="CP0_Tab" type="text" value={this.state.nameOne} name="nameOne" onChange={this.handleChange} /></Link>
                        </li>
                        <li>
                          <Link to="/Darth_Vader"><input class="DarthVader_Tab" type="text" value={this.state.nameTwo} name="nameTwo" onChange={this.handleChange} /></Link>
                        </li>
                        <li>
                          <Link to="/BB_8"><input class="BB8_Tab" type="text" value={this.state.nameThree} name="nameThree" onChange={this.handleChange} /></Link>
                        </li>
                        <li>
                          <Link to="/Boba_Fett"><input class="BobaFett_Tab" type="text" value={this.state.nameFour} name="nameFour" onChange={this.handleChange} /></Link>
                        </li>
                        <li>
                          <Link to="/R2_D2"><input class="R2D2_Tab" type="text" value={this.state.nameFive} name="nameFive" onChange={this.handleChange} /></Link>
                        </li>               
                    </nav>
                    <div className="noneMobileView">       
                    <Route exact path="/" component={C3P0} />
                    <Route path="/C_3P0" component={C3P0} />
                    <Route path="/Darth_Vader" component={DarthVader} />
                    <Route path="/BB_8" component={BB8} />
                    <Route path="/Boba_Fett" component={BobaFett} />      
                    <Route path="/R2_D2" component={R2D2} />
                    </div>
                    <Route path="/" component={MobileList} />              
                </div>
            </Router>
          );
      }
};

export default PanelRoutes;