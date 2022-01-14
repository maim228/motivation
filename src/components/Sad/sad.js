import {Container,Row,Col,FormControl,Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import "./sad.css"

function Sad() {
    let navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('sadR');
    }
    return (
      <div className="happy">
        <Container fluid="md">
            <Row>
                <Col>
                <h1>انا اسف ليك علي اي حاجه وحشة حصلت انهاردة</h1>
                <h6>لو عايز تفضفض اكتب هنا ومتخافش مفيش حد غيرك هيقرا كلامك</h6>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                <FormControl as="textarea" dir="rtl" placeholder="احكيلي اية الي مزعل القمر بس ...." />
                <Button variant="primary" type='submit'>خلصت؟</Button>
                </form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Sad;