import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
function Sami() {
  return (
<>

<hr className='py-3'></hr>

<h3 className='sam py-5' id='textt'>Subscribe For NewLetter</h3>
<form id='fom'>
<input type='text' placeholder='Email' className='p-1'></input>
<button id='btn1'> Subscribe</button>
</form>

<Container className='py-5 pb-10 md:text-wrap'>  
<Row className='textt'>

<Col className='s'>Priority Stitching <br /> Receive your stitched orders more quickly in a timeline of 2 weeks </Col>

<Col className='s'>Custom Size<br />
Get your outfit tailored to perfection as per your desired measurements </Col>

<Col className='s'>
Free Shipping
<br/>
We provide free shipping all across Pakistan on all of our orders </Col>
<Col className='s'>ORDER EXCHANGE<br/>
For a hassle free exchange service, fill out the exchange form </Col>
</Row>
</Container>
<hr className='py-4'></hr>
</>

)
}

export default Sami