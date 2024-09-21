import React from 'react';
// import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';

function R(props) {
  return (
  <>
          <img src={props.imgUrl} alt={props.title} />
          <h1 className='font p-3 text-lg'>{props.title}</h1>
          <button className='btn p-1 mb-5 sm:text'>SHOP NOW</button>
          </>
  );
}

export default R;
