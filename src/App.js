import { Route ,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap'
import Home from './components/Home/home';
import Happy from './components/Happy/happy';
import Sad from './components/Sad/sad';
import SadR from './components/imagesR/sadR';
import HappyR from './components/imagesR/happyR';

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <Col>
          <Routes basename={'/land/motivation'}>
            <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Home />} />  
            <Route path={`${process.env.PUBLIC_URL}/happy`} element={<Happy />} />  
            <Route path={`${process.env.PUBLIC_URL}/sad`} element={<Sad />} />  
            <Route path={`${process.env.PUBLIC_URL}/sad/sadR`} element={<SadR />} />  
            <Route path={`${process.env.PUBLIC_URL}/happy/happyR`} element={<HappyR />} />  
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
