// import React from 'react';
// import './NewBooking.css';

// function Labels() {
//   return (
//     <div className="booking-card success-card animate-pop">
//       <div className="success-icon">✓</div>
//       <h2 className="section-title">Payment Successful!</h2>
//       <p>Your shipment has been successfully booked.</p>
      
//       <div className="tracking-box">
//         <p>Transaction ID: <strong>TXNYON5X60L1</strong></p>
//         <div className="tracking-badge">Tracking Number: SF1234567890</div>
//       </div>

//       <div className="label-preview">
//         <div className="label-header">Shipping Label</div>
//         <div className="label-details">
//           <p><strong>From:</strong> John Doe, Mumbai</p>
//           <p><strong>To:</strong> Jane Smith, Delhi</p>
//           <p><strong>Weight:</strong> 2.5 kg</p>
//         </div>
//       </div>

//       <div className="btn-group centered">
//         <button className="back-btn">Download PDF</button>
//       </div>
//     </div>
//   );
// }

// export default Labels;

import './NewBooking.css'

export default function Labels() {
  return (
    <div className="booking-card animate-fade-in">
      <h2 className="section-title">Booking Completed</h2>
      <p>Your shipment is confirmed</p>

      <div className="tracking-box">
        <p>Tracking ID</p>
        <strong>SF12345678</strong>
      </div>

      <button className="submit-btn">Download Label</button>
    </div>
  )
}
