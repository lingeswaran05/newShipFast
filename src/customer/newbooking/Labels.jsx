import './NewBooking.css'
export default function Labels() {
  const date=new Date();
  const expectdate=new Date(date);
  expectdate.setDate(date.getDate() + 3);

  return (
<>
     <div className="label-Card-content1">
          <h1 className="success-child1">
            <i className="bi bi-box"></i>
          </h1>
          <h2  className="label-child2">Booking Confirmed!</h2>
          <p  className="label-child3">Your shipment has been successfully booked</p>
          <div className="label-datas">
            <div className="tracking-number">
              <p className="name">Tracking Number</p>
              <p className="value">SF123456790</p>
            </div>
            <div className="booking-date">
              <p className="name">Booking Date</p>
              <p className="value">{date.toLocaleString()}</p>
            </div>
            <div className="service-type">
              <p className="name">Service Type</p>
              <p className="value">Standard Delivery</p>
            </div>
            <div className="estimated-delivery">
              <p className="name">Estimated Delivery</p>
              <p className="value">{expectdate.toLocaleString()}</p>
            </div>
          </div>
          <div className="label-Card-content2">
            <h1 className="printer"><i className="bi bi-printer"></i></h1>
            <h3>Shipping Label</h3>
            <h3>Print and attach this label to your package</h3>
            <div className="ship-data">
              <h4>SF123456790</h4>
              <h4>From: John Doe, Mumbai</h4>
              <h4>To: Jane Smith, Delhi</h4>
              <h4>Weight: 2.5 kg</h4>
            </div>
          </div>
          <div className="label-buttons">
            <button className="download-btn">Download Label (PDF)</button>
            <button className="print-label">Print Label</button>
          </div>
        </div>
    </>
  )
}
