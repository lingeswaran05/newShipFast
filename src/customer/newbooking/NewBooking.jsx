import {useState,React} from 'react'
import { NavLink,Route,Routes} from 'react-router-dom';
import './NewBooking.css'
import Shipmentdetails from './Shipmentdetails'
import Rateservice from './Rateservice'
import Newpayments from './Newpayments'
import Labels from './Labels'
function NewBooking() {
    const [activeTab, setActiveTab] = useState("shipmentdetails");
  
  return (
    <div>
      <div className="newbooknav">

      <div className="NB-tabs">
        <button className={`tab-btns ${activeTab !== "shipmentdetails" ? "act-all" : "hover-blue"}`} onClick={() => setActiveTab("shipmentdetails")}><span className='noofst'>1</span>Shipment Details</button>
        <button className={`tab-btns ${activeTab !== "rateservice" ? "act-all" : "hover-blue"}`} onClick={() => setActiveTab("rateservice")}><span className='noofst'>2</span>Rate & service</button>
        <button className={`tab-btns ${activeTab !== "payments" ? "act-all" : "hover-blue"}`} onClick={() => setActiveTab("payments")}><span className='noofst'>3</span>Payments</button>
        <button className={`tab-btns ${activeTab !== "labels" ? "act-all" : "hover-blue"}`} onClick={() => setActiveTab("labels")}><span className='noofst'>4</span>Labels</button>
      </div>
      <div className="NB-cont">
        <div className="nb-cont2">{activeTab === "shipmentdetails" && <Shipmentdetails />}</div>
        <div className="nb-cont2"> {activeTab === "rateservice" && <Rateservice/>}</div>
        <div className="nb-cont2">{activeTab === "payments" && <Newpayments/>}</div>
        <div className="nb-cont2">{activeTab === "labels" && <Labels />}</div>
      </div>
      </div>
    </div>
  );
}

export default NewBooking;

// import { useState } from 'react';
// import './NewBooking.css';
// import ShipmentDetails from './Shipmentdetails';
// import RateService from './Rateservice';
// import NewPayments from './Newpayments';
// import Labels from './Labels';

// function NewBooking() {
//   const [activeTab, setActiveTab] = useState("shipmentdetails");
//   const [bookingData, setBookingData] = useState(null);
//   const [selectedRate, setSelectedRate] = useState(null);

//   // Helper to move to next step
//   const nextStep = (step, data = null) => {
//     if (data && step === "rateservice") setBookingData(data);
//     if (data && step === "payments") setSelectedRate(data);
//     setActiveTab(step);
//   };

//   return (
//     <div className="booking-container">
//       <div className="newbooknav">
//         {/* Step Indicator */}
//         <div className="NB-tabs">
//           <div className={`tab-item ${activeTab === "shipmentdetails" ? "active" : ""}`}>
//             <span className='noofst'>1</span> Shipment Details
//           </div>
//           <div className={`tab-item ${activeTab === "rateservice" ? "active" : ""}`}>
//             <span className='noofst'>2</span> Rate & Service
//           </div>
//           <div className={`tab-item ${activeTab === "payments" ? "active" : ""}`}>
//             <span className='noofst'>3</span> Payments
//           </div>
//           <div className={`tab-item ${activeTab === "labels" ? "active" : ""}`}>
//             <span className='noofst'>4</span> Labels
//           </div>
//         </div>

//         {/* Dynamic Content */}
//         <div className="NB-cont">
//           {activeTab === "shipmentdetails" && (
//             <ShipmentDetails onNext={(data) => nextStep("rateservice", data)} />
//           )}
//           {activeTab === "rateservice" && (
//             <RateService 
//               onNext={(rate) => nextStep("payments", rate)} 
//               onBack={() => setActiveTab("shipmentdetails")} 
//             />
//           )}
//           {activeTab === "payments" && (
//             <NewPayments 
//               selectedRate={selectedRate}
//               onNext={() => setActiveTab("labels")} 
//               onBack={() => setActiveTab("rateservice")} 
//             />
//           )}
//           {activeTab === "labels" && <Labels />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewBooking;