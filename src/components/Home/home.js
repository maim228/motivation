import {Card,Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import happyIcon from "./happy.svg"
import sadIcon from "./sad.svg"
import "./home.css"

function Home() {
    return (
      <div className="homeCard">
          <Container fluid="md">
        <Row>
          <Col>
          <Card style={{ width: '18rem',margin:"24px auto", padding: "24px",color:"#ECB365" }}>
            <Card.Img variant="top" src={happyIcon} />
            <Card.Body>
                <Card.Title>يومك عدي بسلام :) ؟</Card.Title>
                <Card.Text>
                    انا مبسوط بيك واتمني ايامك كلها تبقي كدا, عايز اسمع منك انجازاتك انهاردة
                </Card.Text>
                <Link to={`${process.env.PUBLIC_URL}/happy`}>دوس هنا واحكيلي</Link>
            </Card.Body>
        </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem',margin:"24px auto",padding: "24px",color:"#ECB365" }}>
  <Card.Img variant="top" src={sadIcon} />
  <Card.Body>
    <Card.Title>يومك مكانش لطيف :/ ؟</Card.Title>
    <Card.Text>
      انا اسف ليك جدا, انا ممكن اسمع منك كمان ومتخافش مش هقول لحد علي حاجه
    </Card.Text>
    <Link to={`${process.env.PUBLIC_URL}/sad`}>دوس هنا وفضفض</Link>
  </Card.Body>
</Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
  
  export default Home;
  