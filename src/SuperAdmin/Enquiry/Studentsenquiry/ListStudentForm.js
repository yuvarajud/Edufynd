import React from 'react'
import Mastersidebar from '../../../compoents/sidebar';
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { Dialog, DialogContent, DialogTitle, IconButton, Pagination, backdropClasses, radioClasses, } from "@mui/material";
export const ListStudentForm = () => {
  return (
    <div>
      <div  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans' }}>
    <div class="container-fluid">
          <nav class="navbar navbar-vertical navbar-expand-lg">
            <Mastersidebar />
          </nav>
        <div className='content-wrapper' style={{ backgroundColor: '#fff' }}>

        <div className='col-xl-12'  >
                  <ol className="breadcrumb d-flex justify-content-end align-items-center w-100">
                    
                    <li className="flex-grow-1">
                      <div className="input-group" style={{ maxWidth: "600px" }}>
                        <input
                          type="search"
                          placeholder="Search"
                          aria-describedby="button-addon3"
                          className="form-control-lg bg-white border-2 ps-1 rounded-4 text-capitalize  w-100"
                          style={{
                            borderColor: "#FE5722",
                            paddingRight: "1.5rem",
                            marginLeft: "0px",
                            fontSize: "12px", // Keep the font size if it's correct
                            height: "11px", // Set the height to 11px
                            padding: "0px" // Adjust padding to fit the height
                          }}
                        />
                        <span
                          className="input-group-text bg-transparent border-0"
                          id="button-addon3"
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer"
                          }}
                        >
                          <i className="fas fa-search" style={{ color: "black" }}></i>
                        </span>
                      </div>
                    </li>
                    <li class="m-1">


                      <div style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}>
                        <button className="btn btn-primary" type="button" style={{ fontSize: '11px' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <FaFilter /></button>
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                          <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Filter University</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                          </div>
                          <div className="offcanvas-body ">
                            <form>
                              <div className="from-group mb-3">
                                <label className="form-label">University Name</label>
                                <br />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="universityName"
                                
                                  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                  placeholder="Search...University Name"
                                />
                                <label className="form-label">Campus</label>
                                <br />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="state"
                                
                                  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                  placeholder="Search...Campus"
                                />
                                <label className="form-label">Average Fees</label>
                                <br />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="averageFees"
                                
                                  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                  placeholder="Search...Average Fees"
                                />
                                <label className="form-label">Country</label>
                                <br />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="country"
                                 
                                  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                  placeholder="Search...Country"
                                />

                                <label className="form-label">Popular Categories</label>
                                <br />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="popularCategories"
                               
                                  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                  placeholder="Search...Country"
                                />
                              </div>
                              <div>
                                <button

                                  data-bs-dismiss="offcanvas"
                                  className="btn btn-cancel border-0 text-white float-right bg"
                                  style={{ backgroundColor: "#fe5722", fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}
                                 
                                >
                                  Reset
                                </button>
                                <button
                                  data-bs-dismiss="offcanvas"
                                  type="submit"
                                 
                                  className="btn btn-save border-0 text-white float-right mx-2"
                                  style={{ backgroundColor: "#fe5722", fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}
                                >
                                  Apply
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>


                    </li>
                    <li class="m-2">
                      <Link >
                        <button style={{ backgroundColor: "#E12929", fontSize: '11px' }} className="btn text-white ">
                          <span>
                            <i class="fa fa-file-pdf" aria-hidden="true"></i>
                          </span>
                        </button>
                      </Link>
                    </li>
                    <li class="m-1">
                      <Link class="btn-filters">
                        <span>
                          <button style={{ backgroundColor: "#22A033",fontSize: '11px'  }} className="btn text-white ">
                            <i class="fa fa-file-excel" aria-hidden="true"></i>
                          </button>
                        </span>
                      </Link>
                    </li>

                    <li class="m-1">
                      <Link class="btn-filters">
                        <span>
                          <button
                            style={{ backgroundColor: "#9265cc",fontSize: '11px'  }}
                            className="btn text-white "
                          >
                            <i class="fa fa fa-upload" aria-hidden="true"></i>
                          </button>
                        </span>
                      </Link>
                    </li>
                    <li class="m-1">
                      <Link class="btn btn-pix-primary" to="/AddStudentForm">
                        <button
                          className="btn btn-outline border text-white  "

                          style={{ backgroundColor: "#9265cc", fontFamily: 'Plus Jakarta Sans', fontSize: '11px' }}
                        >
                          <i
                            class="fa fa-plus-circle me-2"
                            aria-hidden="true"
                          ></i>
                          Add Student Form
                        </button>
                      </Link>
                    </li>

                  </ol>


                </div>
                <div className="row">
          <div className="container">
          <div className="col-md-12">
            <div className="card mt-2 border-0">
              <div className="card-body">
                <div className="card-table">
                  <div className="table-responsive">
                    <table className=" table card-table dataTable text-center" style={{ color: "#9265cc",fontSize:'13px' }}>
                      <thead>
                        <tr >
                          <th> S.No.</th>
                          <th> Date </th>
                          <th> Student Code </th>
                          <th> Name </th>
                          <th> Contact Number </th>
                          <th> Email ID </th>
                          <th> Desired Country</th>
                          <th> Source</th>
                          <th> Assigned To</th>
                          <th> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                        <tr  >
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                                  <div className="d-flex">
                                    <Link
                                      className="dropdown-item"
                                      to={{
                                        pathname: "/ViewStudentForm",
                                       
                                      }}
                                    >
                                      <i className="far fa-eye text-primary me-1"></i>
                                    </Link>
                                    <Link
                                      className="dropdown-item"
                                      to={{
                                        pathname: "/EditStudentForm",
                                        
                                      }}
                                    >
                                      <i className="far fa-edit text-warning me-1"></i>
                                    </Link>
                                    <button
                                      className="dropdown-item"
                                     
                                    >
                                      <i className="far fa-trash-alt text-danger me-1"></i>
                                    </button>
                                  </div>
                                </td>
                        </tr>
                      
                      
                        <tr>
                          <td className="form-text text-danger" colSpan="9">
                            No data
                          </td>
                        </tr>
                     
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="float-right my-2">
                  <Pagination variant="outlined" shape="rounded" color="primary"/>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
  


        
        </div>
                    
               </div>     
    </div>
    </div>
  )
}
export default ListStudentForm