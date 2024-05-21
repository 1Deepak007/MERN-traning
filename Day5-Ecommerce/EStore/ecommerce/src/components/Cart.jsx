import React from 'react'
import '../Styles/Cart.css'

export default function Cart() {

  return (
    <div className='container my-4 '>
      <h3 className='text-center text-decoration-underline' style={{fontFamily:'sans'}}>Your Cart </h3>
      <div className="row mx-2">

        <div className="card">
          <div className="row">
            <div className="col-sm-2">
              <h5 className="card-title">Item</h5>
            </div>
            <div className="col-sm-2">
              <h5 className="card-title">Brand</h5>
            </div>
            <div className="col-sm-2">
              <h5 className="card-title">Quantity</h5>
            </div>
            <div className="col-sm-2">
              <h5 className="card-title">Unit Price</h5>
            </div>
            <div className="col-sm-2">
              <h5 className="card-title">Total Price</h5>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row">
            <div className="col-sm-2">
              <h6 className='my-4'>Fry Pan</h6>
            </div>
            <div className="col-sm-2">
              <h6 className="card-title my-4">X</h6>
            </div>
            <div className="col-sm-2">
              <h6 className="card-title my-4">2</h6>
            </div>
            <div className="col-sm-2">
              <h6 className="card-title my-4">200</h6>
            </div>
            <div className="col-sm-2">
              <h5 className="card-title my-4">400</h5>
            </div>
            <div className="col-sm-2">
              <img style={{ 'height': '100px' }} src="https://www.luluhypermarket.in/medias/28878-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3OTA3NXxpbWFnZS9qcGVnfGFHWXdMMmcxTlM4NE9EQXlPRGs1TVRrM09UZ3lMekk0T0RjNExUQXhMbXB3WjE4eE1qQXdWM2d4TWpBd1NBfDFhODQ1ZTljYTMzZmYxMDc5N2UyOThjYzJiNzVhMjA2MTQxNzdhNzZkOGQ2Yjg3Zjg5MWNkYmI5ZTIwYmYyY2U" alt="image here" />
            </div>
          </div>
        </div>

        <div className="card ps-5 ">
          <div className="row ms-5 ">
            <div className="col col-sm-2">
              <h5 className="card-title">Cart Total</h5>
            </div>
            <div className="col ms-5 ">
              <h5 className="ms-5 ">2</h5>
            </div>
            <div className="col">
              <h5 className="ms-5 ">400</h5>
            </div>
          </div>
        </div>
        
        {/* -------------------------------------------------- */}

        {/* <div className="col">
          <div className='my-4'>
            <table class="mx-auto my-auto">
              <thead>
                <tr>
                  <th class="border-collapse border border-slate-600 p-2">S.No.</th>
                  <th class="border-collapse border border-slate-600 p-2">Product</th>
                  <th class="border-collapse border border-slate-600 p-2">Price</th>
                  <th class="border-collapse border border-slate-600 p-2">Quatity</th>
                  <th class="border-collapse border border-slate-600 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border-collapse border border-slate-700 p-2">1</td>
                  <td class="border-collapse border border-slate-700 p-2">Fry Pan</td>
                  <td class="border-collapse border border-slate-700 p-2">200</td>
                  <td class="border-collapse border border-slate-700 p-2">1</td>
                  <td class="border-collapse border border-slate-700 p-2">200</td>
                </tr>
                <tr>
                  <td class="border-collapse border border-slate-700 p-2">2</td>
                  <td class="border-collapse border border-slate-700 p-2">Egg Crate</td>
                  <td class="border-collapse border border-slate-700 p-2">170</td>
                  <td class="border-collapse border border-slate-700 p-2">2</td>
                  <td class="border-collapse border border-slate-700 p-2">340</td>
                </tr>
                <tr>
                  <td class="border-collapse border border-slate-700 p-2">3</td>
                  <td class="table-fixed border-collapse border border-slate-700 p-2">Washing Powder</td>
                  <td class="table-fixed border-collapse border border-slate-700 p-2">340</td>
                  <td class="table-fixed border-collapse border border-slate-700 p-2">1</td>
                  <td class="table-fixed border-collapse border border-slate-700 p-2">340</td>
                </tr>
                <tr>
                  <td colSpan='3' class="border-collapse border border-slate-700">
                    Total Items & Price
                  </td>
                  <td class="table-fixed border-collapse border border-slate-700 p-2">4</td>
                  <td class="table-fixed border-collapse border border-slate-700 p-2">880</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

      </div>
    </div>
  )
}



{/* <button style={{'backgroundColor':'lightblue','borderRadius':'15px', 'fontSize':'110%','marginLeft':'80%','padding':'5px'}}>Remove Product</button>
            <button style={{'backgroundColor':'lightgreen','borderRadius':'15px', 'fontSize':'110%','marginLeft':'80%','padding':'5px'}}>View Product</button> */}