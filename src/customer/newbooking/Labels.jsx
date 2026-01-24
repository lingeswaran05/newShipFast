import './NewBooking.css'
const Card = ()=>{return(
  <><div className="h1">From Card Payment</div></>
)}
const UPI = ()=>{return(
  <><div className="h1">From Upi Payment</div></>
)}
const NetBanking = ()=>{return(
  <><div className="h1">From Net Banking Payment</div></>
)}
export default function Labels() {
  return (
    <div className="booking-card animate-fade-in">
      <div className="success-icon">✓</div>
      <h2 className="section-title">Payment Successful!</h2>
      <p>Your shipment has been successfully booked.</p>
      
      <div className="tracking-box">
        <p>Transaction ID: <strong>TXNYON5X60L1</strong></p>
        <div className="tracking-badge">Tracking Number: SF1234567890</div>
      </div>

      <div className="label-preview">
        <div className="label-header">Shipping Label</div>
        <div className="label-details">
          <p><strong>From:</strong> John Doe, Mumbai</p>
          <p><strong>To:</strong> Jane Smith, Delhi</p>
          <p><strong>Weight:</strong> 2.5 kg</p>
        </div>
      </div>
      <button className="submit-btn">Download Label</button>
    </div>
  )
}
