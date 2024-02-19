import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import card1 from '../assets/images/card1.jpeg';

function SectionComponent({title, text}) {
  return (
    <Container className='m-5'>
      <Row>
        <Col md={4}>
          <Image src={card1} rounded width={300} className='imgBoxShadow animate__rotateInUpLeft imgAnimate' />
        </Col>

        <Col md={7} className='d-flex flex-column align-items-center'>
          <h1 className='c-ligtBrown'>{title}</h1>
          <p className='m-2 w-75'>{text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionComponent;