import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "./imgStyle.css"
import {BsHeartFill} from "react-icons/bs"


function SadR() {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      let randomN = getRndInteger(1,5);

      function RenderImg(x){
          if(x === 1){
          return(<img src='../images/sad/1.jpeg' alt='sad' />)
        }else if(x === 2){
            return(<img src='../images/sad/2.jpeg' alt='sad' />)
        }else if(x === 3){
            return(<img src='../images/sad/3.jpeg' alt='sad' />)
        }else if(x === 4){
            return(
            <div>
            <img src='../images/sad/4.jpeg' alt='sad' /><br/>
            <img src='../images/sad/5.jpeg' alt='sad' /><br/>
            <img src='../images/sad/6.jpeg' alt='sad' /><br/>
            <img src='../images/sad/7.jpeg' alt='sad' /><br/>
            <img src='../images/sad/8.jpeg' alt='sad' />
            </div>
            )
        }else if(x === 5){
            return(<div>
                <img src='../images/sad/9.jpeg' alt='sad' /><br/>
                <img src='../images/sad/10.jpeg' alt='sad' /><br/>
                <img src='../images/sad/11.jpeg' alt='sad' /><br/>
                <img src='../images/sad/12.jpeg' alt='sad' />
                </div>)
        }
      }

    return (
      <div className="sadR">
        <Container fluid="md">
            <Row>
                <Col>
                <h1>انا عارف انك حزين, اختارتلك الصورة دي</h1>
                <h6> <BsHeartFill /> وافتكر دايما ان كل مر سيمر</h6>
                {RenderImg(randomN)}
                <Link to={`${process.env.PUBLIC_URL}/`}>العودة للبداية</Link>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default SadR;