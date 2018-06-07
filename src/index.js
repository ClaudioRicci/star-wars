import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Title } from './Components/Title/Title';
import { GameRow } from './Components/GameRow/GameRow';
import { PlayerOne } from './Components/PlayerOne/PlayerOne';
import { PlayerTwo } from './Components/PlayerTwo/PlayerTwo';
import { FinalScore } from './Components/FinalScore/FinalScore';
import { Sets } from './Components/Sets/Sets';
import { DeleteButton } from './Components/DeleteButton/DeleteButton';
import { MobileView } from './Components/MobileView/MobileView';

export {
    PlayerOne,
    PlayerTwo,
    FinalScore,
    Sets,
    DeleteButton,
    MobileView
}

import './main.scss';

const title = 'Claudio Ricci Table Tennis Scoreboard';

class App extends React.Component {
  render() {
    return (
      <div className="gameSurround">
      	<Title/>
      	<GameRow/>
      </div>
    );
  }
}

ReactDOM.render(
  <App pagename={title}/>,
  document.getElementById('app')
);

module.hot.accept();