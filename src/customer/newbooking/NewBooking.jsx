import React from 'react'
import { NavLink,Route,Routes} from 'react-router-dom';
import './NewBooking.css'
import Shipmentdetails from './Shipmentdetails'
import Rateservice from './Rateservice'
import Newpayments from './Newpayments'
import Labels from './Labels'
function NewBooking() {
  return (
    <div>
      <h1>hello</h1>
      <div className="newbooknav">
       <nav className='navbar2' id='navibar2'>
          <div ><NavLink to='/shipmentdetails'  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><i className="bi bi-house-boxes"></i>Shipment Details</NavLink></div>
          <div ><NavLink to='/rateservice'  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><i className="bi bi-plus-star"></i>Rate Service</NavLink></div>
          <div ><NavLink to='/newpayments'  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><i className="bi bi-credit-card-2-front"></i>New Payments</NavLink></div>
          <div ><NavLink to='/labels' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><i className="bi bi-circle"></i>Labels</NavLink></div>
        </nav>
      </div>
      <div className="newbookcard">
        <Routes>
            <Route path='/shipmentdetails' element={<Shipmentdetails/>}></Route>
            <Route path='/rateservice' element={<Rateservice/>} ></Route>
            <Route path='/newpayments' element={<Newpayments/>}></Route>
            <Route path='/labels' element={<Labels/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default NewBooking;