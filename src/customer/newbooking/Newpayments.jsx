import React, { useState } from 'react';
import './NewBooking.css';

function Newpayments({ selectedRate, onNext, onBack }) {
  const [method, setMethod] = useState('paypal');

  return (
    <div className="payment-layout">
      <div className="booking-card payment-methods">
        <h3 className="section-heading">Payment Method</h3>
        <p className="sub-text">Choose your preferred payment method</p>

        <div className="method-grid">
          {['PayPal', 'Credit/Debit Card', 'UPI', 'Net Banking'].map((item) => (
            <div 
              key={item} 
              className={`method-item ${method === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => setMethod(item.toLowerCase())}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="payment-action-area">
          {method === 'paypal' && (
            <div className="paypal-view">
              <div className="paypal-logo">PayPal</div>
              <p>You will be redirected to PayPal to complete your payment securely.</p>
            </div>
          )}
          <button className="submit-btn wide" onClick={onNext}>Pay ₹{selectedRate?.total || '0.00'}</button>
        </div>
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
  );
}

export default Newpayments;