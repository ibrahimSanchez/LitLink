import Card from 'react-bootstrap/Card';

function CardComponent({title, text, image}) {
  return (
    <Card className='mt-5 border-0' style={{ width: '18rem', background: '#dad2cd' }}>
      <Card.Img variant="top" src={image} className='imgBoxShadow rounded imgAnimate' />
      <Card.Body>
        <Card.Title className='c-ligtBrown'>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;