import { useState } from 'react'
import './NewBooking.css'
const Paypal = ({ totalpaypal }) => {
  return (
    <div className="paypal-content">
      <h3><i className="logoimg bi bi-paypal"></i></h3>
      <h3>PayPal Checkout</h3>
      <h3 className="desc">
        You will be redirected to PayPal to complete your payment securely
      </h3>
      <h3>Amount: ₹{totalpaypal?.total}</h3>
    </div>
  )
}
const Card = ()=>{return(
  <><div className="h1">From Card Payment</div></>
)}
const UPI = ()=>{return(
  <><div className="h1">From Upi Payment</div></>
)}
const NetBanking = ()=>{return(
  <><div className="h1">From Net Banking Payment</div></>
)}
export default function Newpayments({ selectedRate, onNext }) {
  const [method, setMethod] = useState('unselect')

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
          method=='UPI'?<div className="Upi-checkout">{<UPI/>}</div>:
          method=='Card'?<div className="card-checkout">{<Card/>}</div>:
          method=='PayPal'?<div className="card-checkout">{<Paypal totalpaypal={selectedRate}/>}</div>:
          method=='NETBANKING'?<div className="NetBanking-checkout">{<NetBanking/>}</div>:
          <div className="PAYPAL-checkout"><h3>Click any Payent Method to pay</h3></div>
        }</div>
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
