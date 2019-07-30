import React, { useState } from 'react';
import { Chat } from './Chat/Chat';
import { Users } from './Users/Users';
import { Geschwindigkeitsanzeige, VType } from '../Geschwindigkeitsanzeige';

const App: React.FC = () => {

  const [type, setType]: [ VType, Function ] = useState('boden');

  return (
    <div className="App">
      <div className="container">
      <h1>Our super Chat</h1>
        <div className="row">
          <div className="col-12 col-sm-8 border">
            <Chat />
          </div>
          <div className="col-12 col-sm-4 border">
            <Users />
          </div>
        </div>
      </div>
      <button onClick={() => {
        if (type === 'boden') {
          setType('luft');
        } else {
          setType('boden');
        }
      }}>
        Toggle {type}
      </button>
    </div>
  );
}

export default App;
