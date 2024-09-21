import './App.css';
// import Page1 from './Page1';
import { Component } from 'react';
// import Header from './Header';
import Navbar from './Navbar';
import OffcanvasExample from './OffcanvasExample';
import R from './R';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Cont from './Cont';
import Videos from './Videos';
import Sami from './Sami';
import Footer from './Footer';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {    
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Page1 />,  
  //   },
  //   {
  //     path: "/a",
  //     element: <Header/>,  
  //   },


  // ]);
  return (

    
    <div className="App">
      <Navbar />
      <OffcanvasExample />
      <Container className='pb-6'>
        
        <Row className='md:justify-center'>
          <Col md={4}> <R imgUrl="https://baroque.pk/cdn/shop/files/02_Banner186.jpg?v=1725974261&width=500" title="READY TO WEAR" /></Col>
          <Col md={4}><R imgUrl="https://baroque.pk/cdn/shop/files/02_Banner15_a036f587-c326-4c84-b635-f1353a2df2fa.jpg?v=1725974235&width=500" title="SHAWLS" /></Col>
          <Col md={4}><R imgUrl="https://baroque.pk/cdn/shop/files/02_Banner125.jpg?v=1726313623&width=500" title="CHANTETLLE" /></Col>
        </Row>
      </Container>  
      <Cont className="sm:justify-center" /> 
      <Videos />
      <Sami />
      <Footer />
      {/* <RouterProvider router={router} />   */}
    </div>
  );
}

export default App;
