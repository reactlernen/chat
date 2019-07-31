import React from 'react';
import { Chat } from './Chat/Chat';
import { Users } from './Users/Users';

const App: React.FC = () => {

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
    </div>
  );
}

export default App;
