import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PanelRoutes } from './Components/Panels/PanelRoutes';

import './main.scss';

const title = 'Claudio Ricci Star Wars';

class App extends React.Component {
  render() {
    return (
      <div>
        <PanelRoutes/>
      </div>
    );
  }
}

ReactDOM.render(
  <App pagename={title}/>,
  document.getElementById('app')
);

module.hot.accept();