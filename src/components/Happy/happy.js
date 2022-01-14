import {Container,Row,Col,FormControl,Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import "./happy.css"

function Happy() {
    let navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('happyR');
    }
    return (
      <div className="happy">
        <Container fluid="md">
            <Row>
                <Col>
                <h1>انا سعيد لانك فرحان انهاردة</h1>
                <h6>احكيلي بقي عملت اية انهاردة؟</h6>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                <FormControl as="textarea" dir="rtl" placeholder="احكيلي يا اشطر كتكوت....." />
                <Button variant="success" type='submit'>خلصت؟</Button>
                </form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Happy;