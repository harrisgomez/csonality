import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';

import { Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Card style={{ width: '34rem' }}>
          <Card.Body>
            <Card.Title>CSONALITY</Card.Title>
            <Card.Text style={{ fontSize: '14px' }}>
              <p>Csonality is a study that attempts to capture trending periods in the stock market and offers a simple probability analysis based on historical data.</p>
              <p>Traders can combine this with their favorite trading strategy to ideally profit through informed decisions.</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='main'>
        <div className='card'>
          <div className="card-input">
            <input type="text" placeholder='Symbol search...' />
          </div>
          <div className="card-calendar">CALENDAR</div>
          <div className="timeframes">
            <button>D</button>
            <button>W</button>
            <button>M</button>
            <button>Q</button>
          </div>
        </div>
        <button className="add-card-btn">
          <span>+ Add Card</span>
        </button>
      </div>
    </div>
  );
}

export default App;
