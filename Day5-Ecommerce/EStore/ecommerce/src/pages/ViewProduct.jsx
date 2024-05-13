import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


// import allproducts from '../resources/productsList.json';
import DisplayIndiProd from './DisplayIndiProd';
import axios from 'axios';


export default function ViewProduct() {

  const [allproduct, SetAllProduct] = useState([]);
  const { id } = useParams();
  // const [product, SetProduct] = useState([]);



  

  // getting products by calling api
  const getAllproducts = async () => {
    try{
      const response = await axios.get(`http://localhost:8089/api/product/${id}`);
      console.log(response);
      SetAllProduct(response.data);
      // const data = response.json
      // console.log('hey',data);
    }
    catch(error){
      console.log('Error fetching data ',error);
    }
  }
  useEffect(() => {
    getAllproducts();
  }, [])

  console.log(allproduct);              // data of all products


  // console.log(allproduct)
  const foundproduct = allproduct.find(product => product.product_id === parseInt(id));
  // console.log(typeof(foundproduct))
  // console.log('Found product : ',foundproduct);
  console.log(`ViewProduct id : ${id}`);



  return (
    <>
      {foundproduct && (
        <>
          {/* <DisplayIndiProd
            id={id} // Don't forget to add a unique key
            name={productName}
            image={productImage}
            price={productPrice}
            description={productDesc}
            trending={productTrending}
          /> */}
          <DisplayIndiProd foundproduct = {foundproduct}
            // id={foundproduct.product_id} // Don't forget to add a unique key
            // name={foundproduct.product_name}
            // image={foundproduct.product_image}
            // price={foundproduct.product_price}
            // description={foundproduct.product_description}
            // trending={foundproduct.trending}
          />

        </>
      )}


    </>
  )
}