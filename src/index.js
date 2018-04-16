import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { Tabs } from './Components/Tabs/tabs';
import { Pane } from './Components/Pane/pane';

const createReactClass = require('create-react-class');

const title = 'Claudio Ricci Star Wars';

const Stage = createReactClass({
  render: function() {
    return (	
      <div>
        <Tabs pagename={this.props.pagename} />
      	<Pane/>
      </div>
    );
  }
});


ReactDOM.render(
  <Stage pagename={title}/>,
  document.getElementById('app')
);

module.hot.accept();
