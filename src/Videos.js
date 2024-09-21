import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'  
import Col from 'react-bootstrap/Col';
function Videos() {
  return (
    <>
    
    <hr className='py-4' />

<h1 className='text-4xl pb-3 font-extralight'>BE INSPIRED</h1>
    
<Container className='sm:size-30'>
<Row>
        <Col sm> <video width={450} type="video/mp4"muted autoPlay src='https://baroque.pk/cdn/shop/videos/c/vp/05f7d6c815d0408d9de934cc6702f512/05f7d6c815d0408d9de934cc6702f512.HD-1080p-2.5Mbps-34383151.mp4?v=0' ></video>
        <button className='T relative bottom-16'>Client Love </button>
        </Col>
        <Col sm> <video width={450} type="video/mp4"muted autoPlay src='https://baroque.pk/cdn/shop/videos/c/vp/8fc59a5cb22a4beb84cae8305256b751/8fc59a5cb22a4beb84cae8305256b751.HD-1080p-2.5Mbps-28444638.mp4?v=0' ></video>
        <button className='T relative bottom-16'>Celebrity Spotted </button>
        </Col>
      
         <Col sm> <video width={450} type="video/mp4"muted autoPlay src='https://baroque.pk/cdn/shop/videos/c/vp/0daed15cc3c14d929e453ef4da2df33c/0daed15cc3c14d929e453ef4da2df33c.HD-1080p-7.2Mbps-34383167.mp4?v=0' ></video>
         <button className='T relative bottom-16'>Style Spotted </button>
         </Col>
      </Row>
      </Container>
    </>
  )
}
export  default Videos;