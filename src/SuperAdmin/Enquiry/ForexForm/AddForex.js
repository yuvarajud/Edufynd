import React from 'react'
import Mastersidebar from '../../../compoents/sidebar';
export const AddForex = () => {
  return (
    <div> 
      <div  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans' }}>
    <div className="container-fluid">
          <nav className="navbar navbar-vertical navbar-expand-lg">
            <Mastersidebar />
          </nav>
        <div className='content-wrapper' style={{ backgroundColor: '#fff',fontSize:'14px' }}>
<div className='content-header'>
  <div className='container card card-body p-4 border-0'>
    <h4 className='card-title text-center fw-bold'>Forex Enquiry </h4>
    <hr/>
  <form className="p-1">
   
    <div className='row mb-3'>
    <div className="col">
                          <label className="form-label" for="inputEmail4">Forex ID </label>
                          <input className="form-control" id="inputEmail4"  type="text" placeholder='Forex ID'/>
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputPassword4">Name of the Student</label>
                          <input className="form-control" id="inputPassword4" type="text" placeholder='Name of the Student' />
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputAddress">Country</label>
                          <input className="form-control" id="inputAddress" type="text" placeholder="Country"/>
                        </div>
    </div>
    <div className='row mb-3'>
    <div className="col">
                          <label className="form-label" for="inputEmail4">Currency  </label>
                          <input className="form-control" id="inputEmail4" type="text" placeholder='Currency'/>
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputPassword4">University Name </label>
                          <input className="form-control" id="inputPassword4" type="Password" placeholder='University Name' />
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputAddress">Student ID</label>
                          <input className="form-control" id="inputAddress" type="text" placeholder="Student ID"/>
                        </div>
    </div>
    <div className='row mb-3'>
    <div className="col">
                          <label className="form-label" for="inputEmail4">Passport No</label>
                          <input className="form-control" id="inputEmail4" type="text" placeholder='Passport No'/>
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputPassword4">Primary Number</label>
                          <input className="form-control" id="inputPassword4" type="Password" placeholder='Primary Number' />
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputAddress">Whatsapp Number</label>
                          <input className="form-control" id="inputAddress" type="text" placeholder="Whatsapp Number "/>
                        </div>
    </div>
    <div className='row mb-3'>
    <div className="col">
                          <label className="form-label" for="inputEmail4">Source</label>
                          <input className="form-control" id="inputEmail4" type="text" placeholder='Source'/>
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputPassword4">Email ID</label>
                          <input className="form-control" id="inputPassword4" type="Password" placeholder='Email ID' />
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputAddress">Payment Type </label>
                          <input className="form-control" id="inputAddress" type="text" placeholder="Payment Type  "/>
                        </div>
    </div>
    <div className='row mb-3'>
    <div className="col">
                          <label className="form-label" for="inputEmail4">Amount In Currency</label>
                          <input className="form-control" id="inputEmail4" type="text" placeholder='Amount In Currency'/>
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputPassword4">Assigned To </label>
                          <input className="form-control" id="inputPassword4" type="Password" placeholder='Assigned To' />
                        </div>
                        <div className="col">
                          <label className="form-label" for="inputAddress">Status </label>
                          <input className="form-control" id="inputAddress" type="text" placeholder="Status  "/>
                        </div>
    </div>
                    <div className='row mb-3'>
                      <div className='d-flex flex-row align-item-center justify-content-end gap-4'>
                      
                          <button className="btn " type="submit" style={{backgroundColor:'#fe5722',color:'#fff'}}>Save</button>
                        
                       
                          <button className="btn btn-secondary" type="submit">Cancel</button>
                        
                      </div>
                    
                    </div>
                        
                      </form>
  </div>
</div>
        
        </div>
                    
               </div>     
    </div>
    </div>
  )
}
export default AddForex