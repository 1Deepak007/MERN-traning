import { useEffect, useState } from 'react'
import './App.css'
import { IoPersonAdd } from "react-icons/io5";

import axios from "axios"
import { useRef } from 'react'


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFiltredProducts] = useState([]);
  const [productData, setProductData] = useState({ name: "", category: "", brand: "" });
  const [errorMsg,setErrorMsg] = useState("");


  const openPopup = () => {
    setProductData({name:"",category:"",brand:""});
    setIsModalOpen(true);
  }
  const handleClose = () => {
    setErrorMsg('');
    getAllProducts();                 // so that we don''t need to refresh page after adding product
    setIsModalOpen(false);
  }


  // getting products by calling api
  const getAllProducts = () => {
    axios.get('http://localhost:4400/products').then((res) => {
      setProducts(res.data);
      setFiltredProducts(res.data);           //setting filterd product instead of all products 
    })
  }

  useEffect(() => {
    getAllProducts();
  }, [])


  // search product     - filter and tackout data
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = products.filter(product => product.name.toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue) || product.brand.toLowerCase().includes(searchValue));
    setFiltredProducts(filteredData);   // set it now in getAllProducts()
  }

  // adding new product and update product
  const handleData = (e) => {              // get onChange data from input fields
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }

  const handleAddproduct = async (e) => {
    e.preventDefault();
    let errmsg = "";
    if(!productData.name || !productData.category || !productData.brand){
      errmsg = "All fields required..!"
      setErrorMsg(errmsg)
    }
    //update data code 
    if((errmsg.length == 0) && productData.productId){
      await axios.patch(`http://localhost:4400/products/${productData.productId}`,productData).then((res)=>{console.log(res.data)})
    }
    //-------------------------
    else if(errmsg.length == 0){
    //add new data
      await axios.post('http://localhost:4400/products', productData).then((res) => {
        console.log(res.data);
      })
    }
    if(errmsg.length == 0){
      handleClose();
    }
  }

  const updateRef = useRef(null);
  const handleUpdate = (product) => {
    setProductData(product);

    setIsModalOpen(true);
    updateRef.current.focus();
  }


  // Delete product
  const handleDelete = async(productId) => {
    const isConfiirmed = window.confirm("Are you sure you want to delete the data ?");
    if(isConfiirmed){
      await axios.delete(`http://localhost:4400/products/${productId}`).then((res)=>{
        setProductData(res.data);
        setFiltredProducts(res.data);
      })
    }
    window.location.reload();
  }

  return (
      <div className="main-container">
        <h2 className='text-decoration-underline'>React Node Mysql</h2>
        <div className="search-box">
          {/* <h3>Search Box</h3> */}
          <input onChange={handleSearchChange} type="search" name='search-box' id='search-box' className='input-search' placeholder='Search Product Here' />
          <button className='addBtn btn btn-success' onClick={openPopup} >Add Product <IoPersonAdd/></button>
        </div>
        <div className="data-box text-center">
          {isModalOpen && (
            <div className='addEditPopup'>
              <span onClick={handleClose} className='closeBtn'>&times;</span>
              <h4 className='my-2'>Product Details</h4>
              {errorMsg && <p className='error'>{errorMsg}</p>}
              <div className='popupdiv'>
                <label htmlFor="name">Name</label> <br />
                <input type="text" value={productData.name} ref={updateRef} onChange={handleData} name='name' id='name' className='popup-input' />
              </div>
              <div className='popupdiv'>
                <label htmlFor="category">Category</label> <br />
                <input type="text" value={productData.category} onChange={handleData} name='category' id='category' className='popup-input' />
              </div>
              <div className='popupdiv'>
                <label htmlFor="brand">Brand</label> <br />
                <input type="text" value={productData.brand} onChange={handleData} name='brand' id='brand' className='popup-input' />
              </div> <br />
              <button className='addProductBtn' onClick={handleAddproduct} >{productData.productId ? "Update Product":"Add Product "}</button>
            </div>)}
          <table className='table'>
            <tr>
              <th>ProductId</th>
              <th>Name</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody>
              {/* ==> all products */}
              {/* {products && products.map((product)=>{
                return (<tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td><button className='btn btn-success '>Edit</button></td>
                  <td><button className='btn btn-danger'>Delete</button></td>
                </tr>)
              })} */}


              {/* ==> filtered products */}
              {filteredProducts && filteredProducts.map((product) => {
                return (<tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td><button className='btn btn-success' onClick={() => handleUpdate(product)}>Edit</button></td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(product.productId)}>Delete</button></td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default App
