import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "./imgStyle.css"
import {BsHeartFill} from "react-icons/bs"

function HappyR() {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      let randomN = getRndInteger(1,5);

      function RenderImg(x){
          if(x === 1){
          return(<img src='../images/happy/1.jpg' alt='happy' />)
        }else if(x === 2){
            return(<img src='../images/happy/2.jpg' alt='happy' />)
        }else if(x === 3){
            return(<img src='../images/happy/3.jpg' alt='happy' />)
        }else if(x === 4){
            return(<img src='../images/happy/3.jpg' alt='happy' />)
        }else if(x === 5){
            return(<img src='../images/happy/2.jpg' alt='happy' />)
        }
      }

    return (
      <div className="sadR">
        <Container fluid="md">
            <Row>
                <Col>
                <h1><BsHeartFill /> انا فخور بيك اوي <BsHeartFill /></h1>
                <h6> اختارتلك الصورة دي انهاردة</h6>
                {RenderImg(randomN)}
                <Link to={`${process.env.PUBLIC_URL}/`}>العودة للبداية</Link>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default HappyR;