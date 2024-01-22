import React from 'react'
import { useEffect,useState } from 'react';
import {Row, Col} from 'react-bootstrap' //row and col are from react bootstrap
import Product from '../components/Product';
const HomeScreen = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    
  })
  return (
    <>
     <h1>Latest Products</h1>
     <Row>
      {products.map((product)=>(
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}> 
           <Product product={product} />
         </Col>
      ))}
     </Row>
    </>
  )
}
// sm,md,lg sizes refer to the arrangement of products images according to diff devices.
export default HomeScreen