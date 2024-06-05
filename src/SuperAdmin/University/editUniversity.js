import React, { useEffect, useState } from 'react';
import { getallCountry } from "../../api/globalsettings";
import { getallClient } from "../../api/client";
import { isValidEmail } from '../../Utils/Validation';
import { toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../compoents/sidebar";
import Select from 'react-select';
import Flags from 'react-world-flags';
import CountryRegion from "countryregionjs";
import { updateUniversity, getSingleUniversity } from "../../api/university";




function Profile() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const initialState = {
    businessName: "",
    banner: "",
    universityLogo: "",
    universityName: "",
    country: "",
    campus: [],
    ranking: "",
    averageFees: "",
    popularCategories: [],
    admissionRequirement: "",
    offerTAT: "",
    email: "",
    founded: "",
    institutionType: "",
    costOfLiving: "",
    grossTuition: "",
    applicationFees: "",
    paymentMethod: "",
    amount: "",
    percentage: "",
    eligibilityForCommission: "",
    currency: "",
    paymentTAT: "",
    tax: "",
    commissionPaidOn: "",
    countryName: "",
    flag: "",
  };

  const initialStateErrors = {
    businessName: { required: false },
    universityLogo: { required: false },
    banner: { required: false },
    universityName: { required: false },
    email: { required: false, valid: false },
    country: { required: false },
    campus: { required: false },
    ranking: { required: false },
    averageFees: { required: false },
    popularCategories: { required: false },
    admissionRequirement: { required: false },
    offerTAT: { required: false },
    founded: { required: false },
    institutionType: { required: false },
    costOfLiving: { required: false },
    grossTuition: { required: false },
    applicationFees: { required: false },
    paymentMethod: { required: false },
    amount: { required: false },
    percentage: { required: false },
    eligibilityForCommission: { required: false },
    currency: { required: false },
    paymentTAT: { required: false },
    tax: { required: false },
    commissionPaidOn: { required: false },
    countryName: { required: false },
    flag: { required: false },
  };

  const [university, setUniversity] = useState(initialState);
  
  const [errors, setErrors] = useState(initialStateErrors);
  const [submitted, setSubmitted] = useState(false);
  const [client, setClient] = useState([]);
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  const handleValidation = (data) => {
    let error = { ...initialStateErrors };
    if (data.universityName === "") error.universityName.required = true;
    if (data.businessName === "") error.businessName.required = true;
    if (data.country === "") error.country.required = true;
    if (data.campus.length === 0) error.campus.required = true;
    if (data.ranking === "") error.ranking.required = true;
    if (data.averageFees === "") error.averageFees.required = true;
    if (data.popularCategories.length === 0) error.popularCategories.required = true;
    if (data.offerTAT === "") error.offerTAT.required = true;
    if (data.email === "") error.email.required = true;
    if (data.founded === "") error.founded.required = true;
    if (data.institutionType === "") error.institutionType.required = true;
    if (data.costOfLiving === "") error.costOfLiving.required = true;
    if (data.grossTuition === "") error.grossTuition.required = true;
    if (data.applicationFees === "") error.applicationFees.required = true;
    if (data.paymentMethod === "") error.paymentMethod.required = true;
    if (data.eligibilityForCommission === "")error.eligibilityForCommission.required = true;
    if (data.countryName === "") error.countryName.required = true;
    if (data.flag === "")error.flag.required = true;
    if (data.currency === "") error.currency.required = true;
    if (data.paymentTAT === "") error.paymentTAT.required = true;
    if (data.tax === "") error.tax.required = true;
    if (!isValidEmail(data.email)) error.email.valid = true;
    return error;
  };

  useEffect(() => {
    getClientList();
    getCountryList();
    getUniversityDetails();
  }, []);

  const getClientList = () => {
    getallClient()
      .then((res) => {
        const value = res?.data?.result;
        setClient(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCountryList = () => {
    getallCountry()
      .then((res) => {
        const value = res?.data?.result;
        setCountry(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUniversityDetails = () => {
    getSingleUniversity(id)
      .then((res) => {
        setUniversity(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInputs = (event) => {
    const { name, value } = event.target;

    setUniversity((prevUniversity) => {
      const updatedUniversity = { ...prevUniversity, [name]: value };


      if (name === "countryName") {
        const details = countryToDetails[value] || { currency: "", flag: "" };
        return { ...updatedUniversity, ...details };
      }

      return updatedUniversity;
    });
    if (submitted) {
      const newError = handleValidation({ ...university, [name]: value });
      setErrors(newError);
    }
  };

  const handleSelectChange = (selectedOptions, action) => {
    const { name } = action;
    const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setUniversity({ ...university, [name]: values });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const isValid = handleValidation(university);

    if (Object.values(isValid).every(error => !error.required) && Object.values(isValid.email).every(error => !error.valid)) {
      try {
        const data = {
          universityName: university.universityName,
          businessName: university.businessName,
          banner: university.banner,
          universityLogo: university.universityLogo,
          country: university.country,
          popularCategories: university.popularCategories,
          campus: university.campus,
          ranking: university.ranking,
          averageFees: university.averageFees,
          admissionRequirement: university.admissionRequirement,
          offerTAT: university.offerTAT,
          email: university.email,
          founded: university.founded,
          institutionType: university.institutionType,
          costOfLiving: university.costOfLiving,
          grossTuition: university.grossTuition,
          applicationFees: university.applicationFees,
          paymentMethod: university?.paymentMethod,
          amount: university?.amount,
          percentage: university?.percentage,
          eligibilityForCommission: university?.eligibilityForCommission,
          currency: university?.currency,
          paymentTAT: university?.paymentTAT,
          tax: university?.tax,
          commissionPaidOn: university?.commissionPaidOn
        };

        const res = await updateUniversity(data);
        toast.success(res?.data?.message);
        navigate("/ListUniversity");
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    } else {
      console.log("Validation failed");
    }
  };

  const countryToDetails = {
    "United States": { currency: "USD", flag: "us" },
    "Canada": { currency: "CAD", flag: "ca" },
    "United Kingdom": { currency: "GBP", flag: "gb" },
    "Australia": { currency: "AUD", flag: "au" },
    "India": { currency: "INR", flag: "in" },

  };
  const campusOptions = [
    { value: 'Us', label: 'Us' },
    { value: 'London', label: 'London' },
    { value: 'Ireland', label: 'IreLand' }
  ];
  const popularCategoriesOptions = client.map((data) => ({
    value: data.businessName,
    label: data.businessName
  }));

  return (

    <>
      <div style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}>
        <div class="">
          <div class="">
            <Sidebar />

          </div>
        </div>
        <div className="content-wrapper " style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '13px' }}>
          <div className="content-header ">
            <div className="content container-fluid ">
              <form onSubmit={handleSubmit} >

                <div className="row">

                  <div className="col-xl-12 ">
                    <div className="card rounded-2 border-0 ">
                      <div className=' position-relative'>
                    <img class=" card-img-top " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVQvOZhtscyfK7ZLkKLKB8HtpSUdEThpJcw&s" alt="image" style={{width:'100%',height :'15rem',objectFit:'cover'}} />
                    <img class="img-fluid rounded-pill position-absolute  " src="https://static.vecteezy.com/system/resources/previews/006/470/649/non_2x/university-education-logo-design-template-free-vector.jpg" alt="image" style={{width:'10rem',height:'10rem',left:'40%',top:'17%'}}  />
                    </div>
                      <div className="card-header justify-content-between d-sm-flex d-block" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}>
                        <div className="card-title" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '16px' }}>
                        University Details :

                        
                        </div>
                        
                      </div>
                      <div className="card-body">
                        <div className="row gy-4">
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">

                            <label style={{ color: "#231F20" }}>
                              {" "}
                              Client Name<span className="text-danger">*</span>
                            </label>
                            <select onChange={handleInputs} style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }} value={university?.businessName} className="form-select rounded-2 p-2 " name='businessName'>
                              <option value={""} disabled hidden >{university?.businessName}</option>
                              {client.map((data, index) =>
                                <option key={index} value={data?.businessName}> {data?.businessName}</option>)}
                            </select>
                            {errors.businessName.required ? (
                              <div className="text-danger form-text">
                                This field is required.
                              </div>
                            ) : null}
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          
                              <label style={{ color: "#231F20" }}>
                                {" "}
                                University Name<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control "
                                placeholder="Enter name"
                                value={university?.universityName}
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                name="universityName"
                                onChange={handleInputs}
                              />
                              {errors.universityName.required ? (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              ) : null}
                            </div>
                        
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          
                              <label style={{ color: "#231F20" }}>
                                Ranking
                              </label>
                              <input
                                type="text"
                                value={university?.ranking}
                                className="form-control "
                                placeholder="Enter Country "
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                name="ranking"
                                onChange={handleInputs}
                              />
                              {errors.ranking.required ? (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              ) : null}
                          </div>
                          
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">

                            <label htmlFor="input-label" className="form-label" style={{ color: "#231F20" }}>University Logo<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              value={university?.universityLogo}
                              className="form-control "
                              placeholder="Enter University Logo Link"
                              style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                              name="universityLogo"
                              onChange={handleInputs}
                            />


                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            
                              <label style={{ color: "#231F20" }}>
                                {" "}
                                Banner<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={university?.banner}
                                className="form-control "
                                placeholder="Enter banner Link"
                                name="banner"
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                onChange={handleInputs}
                              />

                          </div>
                         
                          
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label style={{ color: "#231F20" }}>
                                {" "}
                                Email<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={university?.email}
                                className="form-control "
                                placeholder="Enter Email"
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                name="email"
                                onChange={handleInputs}
                              />
                              {errors.email.required ? (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              ) : errors.email.valid ? (
                                <div className="text-danger form-text">
                                  Enter valid Email Id.
                                </div>
                              ) : null}
                           
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">

                            <label style={{ color: "#231F20" }}>
                              {" "}
                              Country Name<span className="text-danger">*</span>
                            </label>
                            <select onChange={handleInputs} value={university?.country} style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }} className="form-select rounded-2 p-2 " name='country'>
                              <option value={""} disabled hidden >Select Country</option>
                              {country.map((data, index) =>
                                <option key={index} value={data?.country}>{data?.country}</option>)}
                            </select>
                            {errors.country.required ? (
                              <div className="text-danger form-text">
                                This field is required.
                              </div>
                            ) : null}
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <label style={{ color: "#231F20" }}>
                              Campus<span className="text-danger">*</span>
                            </label>
                            <Select
                              isMulti
                              options={campusOptions}
                              value={university?.campus ? university?.campus.map(campus => ({ value: campus, label: campus })) : null}
                              name="campus"
                              onChange={handleSelectChange}
                              styles={{ container: base => ({ ...base, fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }) }}
                            />
                            {errors.campus.required && (
                              <div className="text-danger form-text">
                                This field is required.
                              </div>
                            )}
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            
                            <label style={{ color: "#231F20" }}>
                              Founded <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter founded"
                              value={university?.founded}
                              name="founded"
                              style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                              onChange={handleInputs}
                            />
                            {
                              errors.founded.required ? <div className="text-danger form-text">This field is required.</div> : null
                            }
                        </div>
                      

                        <div className="card-header justify-content-between d-sm-flex d-block" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}>
                        <div className="card-title" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '16px' }}>
                          Course Details :
                        </div>
                        
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                         
                         <label style={{ color: "#231F20" }}>
                           Institution Type <span className="text-danger">*</span>
                         </label>
                         <select
                           className="form-control"
                           style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                           name="institutionType"
                           value={university?.institutionType}
                           onChange={handleInputs}
                         >
                           <option value={"private"}>Private</option>
                           <option value={"public"}>Public</option>
                           <option value={"other"}>Other</option>
                         </select>
                         {
                           errors.institutionType.required ? <div className="text-danger form-text">This field is required.</div> : null
                         }
                     </div> 
                     <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      
                         <label style={{ color: "#231F20" }}>
                           Cost Of living <span className="text-danger">*</span>
                         </label>
                         <input
                           type="text"
                           className="form-control"
                           value={university?.costOfLiving}
                           style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                           placeholder="Enter cost of living"
                           name="costOfLiving"
                           onChange={handleInputs}
                         />
                         {
                           errors.costOfLiving.required ? <div className="text-danger form-text">This field is required.</div> : null
                         }
                     </div>

                     <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                         
                            <label style={{ color: "#231F20" }}>
                              Popular Categories<span className="text-danger">*</span>
                            </label>
                            
                      <Select
        isMulti
        options={popularCategoriesOptions}
        value={university?.popularCategories ? university?.popularCategories.map(popularCategories => ({ value: popularCategories, label: popularCategories })) : null}
        name="popularCategories"
        onChange={handleSelectChange}
        styles={{ container: base => ({ ...base, fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }) }}
      />
     
                            {errors.popularCategories.required && ( 
                              <div className="text-danger form-text">
                                This field is required.
                              </div>
                            )}
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                           
                              <label style={{ color: "#231F20" }}>
                                Application Fees<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={university?.applicationFees}
                                placeholder="Enter Average Fees"
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                name="applicationFees"
                                onChange={handleInputs}
                              />
                              {
                                errors.applicationFees.required ? <div className="text-danger form-text">This field is required.</div> : null
                              }
                          </div>                     
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            
                              <label style={{ color: "#231F20" }}>
                                {" "}
                                offerTAT<span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                name="offerTAT"
                                value={university?.offerTAT}
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                onChange={handleInputs}
                              > <option value={"24hours"}>24Hours</option>
                                <option value={"oneweek"}>One Week</option>
                                <option value={"onemonth"}>One Month</option>
                                <option value={"Threemonth"}>Three Month</option>
                                <option value={"sixmonth"}>Six Month</option>
                              </select>
                              {errors.offerTAT.required ? (
                                <div className="text-danger form-text">
                                  This field is required.
                                </div>
                              ) : null}
                          </div>                    
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            
                              <label style={{ color: "#231F20" }}>
                                Average Fees<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                value={university?.averageFees}
                                className="form-control"
                                placeholder="Enter Average Fees"
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                name="averageFees"
                                onChange={handleInputs}
                              />
                              {
                                errors.averageFees.required ? <div className="text-danger form-text">This field is required.</div> : null
                              }
                          </div>


                          
                        
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                           
                              <label style={{ color: "#231F20" }}>
                                Gross Tuition <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={university?.grossTuition}
                                placeholder="Enter cost of living"
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                name="grossTuition"
                                onChange={handleInputs}
                              />
                              {
                                errors.grossTuition.required ? <div className="text-danger form-text">This field is required.</div> : null
                              }
                            </div>
                         

                            <div className="card-header justify-content-between d-sm-flex d-block" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }} >
                        <div className="card-title" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '16px' }}>
                          Commission Details :
                        </div>
                        
                      </div>


                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                 
                    <label style={{ color: '#231F20' }} className="class-danger">
                      Payment Method
                    </label>
                    <select  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }} value={university?.paymentMethod} className="form-select" name="paymentMethod" onChange={handleInputs}>
                      <option value="">{university?.paymentMethod}</option>
                      <option value="categorie1">Fixed</option>
                      <option value="categorie2">Percentage</option>
                    </select>
                    <br />
                    {university.paymentMethod === 'categorie1' ? (
                      <div className="form-group">
                        <label style={{ color: '#231F20' }} className="class-danger">Ammount</label>

                        <input
                          name="amount"
                          className="form-control"
                          value={university?.amount}
                          type="text"
                          style={{ backgroundColor: '#fff',height: 50, fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}
                          placeholder='Enter Ammount'
                          onChange={handleInputs}
                        />

                      </div>
                    ) : university.paymentMethod === 'categorie2' ? (
                      <div className="form-group">
                        <label style={{ color: '#231F20' }} className="class-danger">Percentage</label>

                        <input
                          name="percentage"
                          className="form-control"
                          type="text"
                          style={{ backgroundColor: '#fff',height: 50, fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}
                          placeholder='Enter Percentage'
                          value={university?.percentage}
                       
                          onChange={handleInputs}
                        />

                      </div>
                    ) : null}
                  </div>
                
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <label style={{ color: "#231F20" }}>
                      {" "}
                      Eligibility for Commission<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                      className="form-control "
                      value={university?.eligibilityForCommission}
                      placeholder="Enter Eligibility for Commission"
                      name="eligibilityForCommission"
                      onChange={handleInputs}
                    />
                    {errors.eligibilityForCommission.required ? (
                      <div className="text-danger form-text">
                        This field is required.
                      </div>
                    ) : null}
                  </div>
                
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <label style={{ color: "#231F20" }}>
                      {" "}
                      Country<span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select rounded-2 p-2 "
                      name="countryName"
                     
                      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                      value={university?.countryName}
                      onChange={handleInputs}
                    > <option  value={""} disabled hidden >{university?.countryName}</option>
                      {Object.keys(countryToDetails).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>

                    {errors.countryName.required ? (
                      <div className="text-danger form-text">
                        This field is required.
                      </div>
                    ) : null}
                  </div>
               
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                 
                    <label style={{ color: "#231F20" }}>
                      currency
                    </label>
                    <div sm="9" className="d-flex align-items-center">
                      {university.flag && (
                        <Flags code={university.flag} className="me-2" value={university.flag} style={{ width: '40px', height: '30px' }} onChange={handleInputs} name='flag' />
                      )}
                      <input className='form-control' type="text"   style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }} onChange={handleInputs} name='currency' value={`${university.currency}`} readOnly />
                    </div>
                    {errors.currency.required ? (
                      <div className="text-danger form-text">
                        This field is required.
                      </div>
                    ) : null}
                  </div>
                
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <label style={{ color: "#231F20" }}>
                      {" "}
                      Payment TAT<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                      className="form-control "
                      placeholder="Enter paymentTAT Link"
                      name="paymentTAT"
                      value={university?.paymentTAT}
                      onChange={handleInputs}
                    />

                  </div>
               
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <label style={{ color: "#231F20" }}>
                      {" "}
                      Tax<span className="text-danger">*</span>
                    </label>
                    <select
                      className='form-select rounded-2 p-2 '
                      name="tax"
                      onChange={handleInputs}
                      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                      displayEmpty
                      value={university?.tax}
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <option value={""}>{university?.tax}</option>
                      <option value="inclusive">Inclusive</option>
                      <option value="exclusive">Exclusive</option>
                    </select>
                    {errors.tax.required ? (
                      <div className="text-danger form-text">
                        This field is required.
                      </div>
                    ) : null}
                  </div>
               
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <label style={{ color: "#231F20" }}>
                      {" "}
                      commissionPaidOn<span className="text-danger">*</span>
                    </label>
                    <select
                      className='form-select rounded-2 p-2 '
                      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                      name="commissionPaidOn"
                      onChange={handleInputs}
                      value={university?.commissionPaidOn}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <option value={""}>{university?.commissionPaidOn}</option>
                      <option value="courseFees">Course Fees</option>
                      <option value="paidFees">Paid Fees</option>
                    </select>
                    {errors.commissionPaidOn.required ? (
                      <div className="text-danger form-text">
                        This field is required.
                      </div>
                    ) : null}
                  </div>
               
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label style={{ color: "#231F20" }}>
                                Admission Requirement <span className="text-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                value={university?.admissionRequirement}
                                placeholder="Enter admission requirements"
                                style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                                rows="5" // You can adjust the number of rows as needed
                                onChange={handleInputs}
                                name="admissionRequirement"
                              ></textarea>
                            </div>
                          </div>

                          <div className="add-customer-btns mb-40 d-flex justify-content-end w-50 ml-auto">
                            <Link
                              style={{ backgroundColor: "#231F20", fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}

                              to="/ListUniversity"
                              className="btn btn-cancel border text-white w-50 m-2"
                            >
                              Cancel
                            </Link>
                            <button
                              style={{ backgroundColor: "#FE5722", fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}

                              type="submit"
                              className="btn btn-save border text-white w-50 m-2"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default Profile;