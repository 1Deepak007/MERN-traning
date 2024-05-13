import React from 'react'
import '../Styles/Cart.css'

export default function Cart() {
  
  return (
    <div>
      <div style={{'marginTop':'2%'}}>
      <h3 className='text-center text-decoration-underline'>Your Cart </h3>
        <table style={{'marginLeft':'35%','marginTop':'3%'}}>
          <thead style={{'border':'2px solid'}}>
            <tr>
              <th style={{'border':'2px solid','padding':'10px'}}>Product Name</th>
              <th style={{'border':'2px solid'}}>Product Price</th>
              <th style={{'border':'2px solid'}}>Product Quantity</th>
              <th style={{'border':'2px solid'}}>Product Total</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{'border':'2px solid','padding':'10px'}}>
              <td style={{'border':'2px solid','padding':'8px'}}>Apple</td>
              <td style={{'border':'2px solid','padding':'8px'}}>1000</td>
              <td style={{'border':'2px solid','padding':'8px'}}>2</td>
              <td style={{'border':'2px solid','padding':'8px'}}>2000</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}



{/* <button style={{'backgroundColor':'lightblue','borderRadius':'15px', 'fontSize':'110%','marginLeft':'80%','padding':'5px'}}>Remove Product</button>
            <button style={{'backgroundColor':'lightgreen','borderRadius':'15px', 'fontSize':'110%','marginLeft':'80%','padding':'5px'}}>View Product</button> */}