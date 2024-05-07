import React from 'react'
import { useParams } from 'react-router-dom'

import allproducts from '../resources/productsList.json';
import DisplayIndiProd from './DisplayIndiProd';


export default function ViewProduct(props) {

  const { id } = useParams();
  // console.log(`ID Received in ViewProduct : ${id}`);
  const productId = parseInt(id);
  // console.log(productId);   // Convert id to integer

  const product = allproducts.find(product => product.productid == productId);
  console.log(product.productname);


  return (
    <>


      {product && (
        <>
          <DisplayIndiProd
            key={product.productid} // Don't forget to add a unique key
            name={product.productname}
            price={product.productprice}
            description={product.productdescription}
            image={product.productimage}
          />
        </>
      )}


    </>
  )
}