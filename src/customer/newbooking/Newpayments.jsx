// import React, { useState } from 'react';
// import './NewBooking.css';

// function Newpayments({ selectedRate, onNext }) {
//   const [method, setMethod] = useState('paypal');

//   return (
//     <div className="payment-layout">
//       <div className="booking-card payment-methods">
//         <h3 className="section-heading">Payment Method</h3>
//         <p className="sub-text">Choose your preferred payment method</p>

//         <div className="method-grid">
//           {['PayPal', 'Credit/Debit Card', 'UPI', 'Net Banking'].map((item) => (
//             <div 
//               key={item} 
//               className={`method-item ${method === item.toLowerCase() ? 'active' : ''}`}
//               onClick={() => setMethod(item.toLowerCase())}
//             >
//               {item}
//             </div>
//           ))}
//         </div>



//       <div className="order-summary-sidebar">
//         <div className="booking-card">
//           <h4 className="section-heading">Order Summary</h4>
//           <div className="summary-row"><span>Service</span> <span>{selectedRate?.title}</span></div>
//           <div className="summary-row"><span>Total</span> <span>₹{selectedRate?.total}</span></div>
//           <div className="secure-badge">
//             <i className="lock-icon">🔒</i> Your payment is encrypted and secure
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Newpayments;
import { useState } from 'react'
import './NewBooking.css'

export default function Newpayments({ selectedRate, onNext }) {
  const [method, setMethod] = useState('UPI')

  return (
  <>
      <div className="payment-header">
        <h3 className="section-heading">Payment Method</h3>
      </div>
    <div className="payment-layout animate-fade-in">

      <div className="booking-card-pmt">
        <div className="method-grid">
          <div className={`method-item status-card1 ${method === 'PayPal' ? 'active' : ''}`} onClick={() => setMethod('PayPal')}>
            <div className="card-cont">
              <i class="logoimg bi bi-paypal"></i>
              <div className="name">PayPal</div>
              <div className="status">Fast & Secure</div>
              
            </div>
          </div>

          <div className={`method-item status-card2 ${method === 'Card' ? 'active' : ''}`} onClick={() => setMethod('Card')}>
            <div className="card-cont">
              <i class="logoimg bi bi-credit-card"></i>
              <div className="name">Credit/Debit Card</div>
              <div className="status">Visa, Mastercard,etc.</div>
            </div>
          </div>

          <div className={`method-item status-card3 ${method === 'UPI' ? 'active' : ''}`} onClick={() => setMethod('UPI')} >
            <div className="card-cont">
              <i class="logoimg bi bi-currency-dollar"></i>
              <div className="name">UPI </div>
              <div className="status">Google Pay,PhonePe</div>
          </div>
        </div>

          <div className={`method-item status-card4 ${method === 'NETBANKING' ? 'active' : ''}`} onClick={() => setMethod('NETBANKING')}>
            <div className="card-cont">
              <i class="logoimg bi bi-bank"></i>
              <div className="name">Net Banking </div>
              <div className="status">All major banks</div>
            </div>
          </div>     
      </div>
        
          <div className="checkout-payment">
            <div>{
              method=='UPI'?<div className="Upi-checkout"><h1>yes i am UPI</h1></div>:
              method=='Card'?<div className="card-checkout"><h1>yes i am card</h1></div>:
              method=='NetBanking'?<div className="NetBanking-checkout"><h1>yes i am NetBanking</h1></div>:
              <div className="PAYPAL-checkout"><h1>yes i am PAYPAL</h1></div>
            }</div>
            <h3>PayPal Checkout</h3>
          </div>
         <button className="submit-btn wide" onClick={onNext}>
          Pay ₹{selectedRate?.total}
        </button>
        </div>
        
        <div className="order-summary-sidebar">
            <div className="booking-card">
               <h4 className="section-heading">Order Summary</h4>
               <div className="summary-row"><span>Service</span> <span>{selectedRate?.title}</span></div>
               <div className="summary-row"><span>Total</span> <span>₹{selectedRate?.total}</span></div>
               <div className="secure-badge">
                 <i className="lock-icon">🔒</i> Your payment is encrypted and secure
                </div>
            </div>
       
      </div>
    </div>
      </>

  )
}
