import React from 'react'
import './Payment.css'
function Payment() {
  return (
    <div>
      <div className='payment'>
        <h2>Pricing Plan</h2>
        <div className='paymentplan'>
          <div className='paymentdiv'>
            <div className='Paymenthead'>
              <label>free</label>
            </div>
            <div className='Paymenttext'>
              <h4>Basic</h4>
              <p>weekly payment</p>
            </div>
            <button>MAKE PAYMENT</button>
          </div>

          <div className='paymentdiv'>
            <div className='Paymenthead'>
              <label>free</label>
            </div>
            <div className='Paymenttext'>
              <h4>Basic</h4>
              <p>weekly payment</p>
            </div>
            <button>MAKE PAYMENT</button>
          </div>

          <div className='paymentdiv'>
            <div className='Paymenthead'>
              <label>free</label>
            </div>
            <div className='Paymenttext'>
              <h4>Basic</h4>
              <p>weekly payment</p>
            </div>
            <button>MAKE PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment