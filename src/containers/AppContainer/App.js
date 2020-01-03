import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';

import { Container, Row, Col } from 'react-bootstrap';
import Header from '../HeaderContainer/Header';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
