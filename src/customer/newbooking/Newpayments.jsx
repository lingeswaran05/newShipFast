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
  const [method, setMethod] = useState('upi')

  return (
  <>
      <div className="payment-header">
        <h3 className="section-heading">Payment Method</h3>
      </div>
    <div className="payment-layout animate-fade-in">

      <div className="booking-card-pmt">
        <div className="method-grid">
          <div className="status-card1" >
                  <div className="card-cont">
                      <i class="logoimg bi bi-clock"></i>
                      <div className="name">PayPal</div>
                      <div className="status">Fast & Secure</div>
                  </div>
                </div>

                <div className="status-card2" >
                  <div className="card-cont">
                        <i class="logoimg bi bi-fire"></i>
                    <div className="name">Deliveried</div>
                    <div className="status">Completed</div>
                  </div>
                </div>

                <div className="status-card3" >
                  <div className="card-cont">
                        <i class="logoimg bi bi-hourglass-split"></i>
                    <div className="name">Delayed</div>
                    <div className="status">Need Attention</div>
                  </div>
                </div>

                <div className="status-card4" >
                  <div className="card-cont">
                    <i class="logoimg bi bi-ban"></i>
                    <div className="name">Cancelled</div>
                    <div className="status">Refunded</div>
                  </div>
                </div>        </div>
        <div className="method-grid">

          {['PAYPAL', 'Card','UPI', 'NetBanking'].map(m => (
            <div key={m} className={`method-item ${method === m ? 'active' : ''}`} onClick={() => setMethod(m)}>
              {m}
            </div>
          ))}
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
