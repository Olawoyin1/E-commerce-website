import React from 'react'

const Cart = () => {
  return (
    <div className='my-5 cart'>
        <div className="container2">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className='d-flex align-items-center gap-2'>
                    <img src="../../Images/f2.png" width="40px" loading='lazy' alt="" />
                    <small>Shirt Series 2</small>
                </th>
                <td>$200</td>
                <td><input type="number" name=""  id="" /></td>
                <td>$200</td>
                </tr>
                <tr>
                <th scope="row" className='d-flex align-items-center gap-2'>
                    <img src="../../Images/f3.png" width="40px" loading='lazy' alt="" />
                    <small>Shirt Series 2</small>
                </th>
                <td>$400</td>
                <td><input type="number" name=""  id="" /></td>
                <td>$400</td>
                </tr>
                <tr>
                <th scope="row" className='d-flex align-items-center gap-2'>
                    <img src="../../Images/image4.png" width="40px" loading='lazy' alt="" />
                    <small>GMV Gamepad</small>
                </th>
                <td>$100</td>
                <td><input type="number" name=""  id="" /></td>
                <td>$100</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Cart