import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function Cont() {
  return (

<>
<hr className="pt-3 pb-3"/>
<h1 className="pb-5 pt-3 text-3xl font-extralight	"> SHOP THE LOOK </h1>
<Carousel className="py-8">
<Carousel.Item>
<Container className="container2">
      <Row>
        <Col sm={6} h-64><img src="https://baroque.pk/cdn/shop/files/Shop_The_Look76.jpg?v=1725975148&width=800" ></img>
        </Col>
        <Col sm={4}><div id="img2">
<img src="https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725624149&width=500" ></img>
<h3 className='m-2'> EMBROIDERED PRINTED LAWN </h3>
<h4 className='m-1'> UF-711 </h4>    
<h4 className='m-1'> Sale pricePKR 8,990.00 </h4>
<button className='btn p-1 mt-3'>VIEW PRODUCT</button>
</div></Col>
      </Row>
</Container> 
</Carousel.Item>
<Carousel.Item>
<Container className="container2 mr-5	">
      <Row>
        <Col sm={6} h-64><img src="https://baroque.pk/cdn/shop/files/Shop_The_Look75.jpg?v=1725265568&width=600" ></img>
        </Col>
        <Col sm={4}><div id="img2">
<img src="https://baroque.pk/cdn/shop/files/135_5a390530-a1a5-4a49-ab55-2c82b0d79b7a.jpg?v=1724493924&width=500" ></img>
<h3 className='m-2'> EMBROIDERED PRINTED LAWN </h3>
<h4 className='m-1'> UF-711 </h4>    
<h4 className='m-1'> Sale pricePKR 8,990.00 </h4>
<button className='btn p-1 mt-3'>VIEW PRODUCT</button>
</div></Col>
      </Row>
</Container>
</Carousel.Item>
<Carousel.Item>
<Container className="container2">
      <Row>
        <Col sm={6} h-64><img src="https://baroque.pk/cdn/shop/files/Shop_The_Look77.jpg?v=1725975311&width=600" ></img>
        </Col>
        <Col sm={4}><div id="img2">
<img src="https://baroque.pk/cdn/shop/files/64_1f121d03-7a2f-419a-9e6a-f5b437b2b73c.jpg?v=1725626909&width=500" ></img>
<h3 className='m-2'> EMBROIDERED PRINTED LAWN </h3>
<h4 className='m-1'> UF-711 </h4>    
<h4 className='m-1'> Sale pricePKR 8,990.00 </h4>
<button className='btn p-1 mt-3'>VIEW PRODUCT</button>
</div></Col>
      </Row>
</Container>
 </Carousel.Item>
</Carousel>


</>
  )
}

export default Cont;





