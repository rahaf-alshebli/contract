import React from 'react'
import {useState} from 'react'
// import { Modal,Button} from 'react-bootstrap';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const View =({contract_name, service_items, total_cost, amount, legal_office_name, employee_number, signing_date, expiration_date, warranty_start_date, warranty_end_date,company_name,location,liaison_officer_name,phone})=>{


    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);



    const [show2, setShow2]=useState(false);
    const handleShow2=()=>setShow2(true);
    const handleClose2=()=>setShow2(false);


//     let d = new Date({expiration_date});
// console.log('Today is: ' + d.toLocaleString());
// d.setDate(d.getDate() -7);

   
    
  
  return (
    <div>
          <div className="card">
    <div className="box">
    <div className="content">
         {/* <h2>01</h2> */}
        <h3>{contract_name}</h3>
        <p>{service_items}</p>
        <h3>{total_cost} JOD</h3>
        {/* <img class="feature__img" src="https://kellychi22.github.io/frontend-mentor-solutions/10-four-card-feature-section/images/icon-supervisor.svg" alt=""/> */}
        <button className='button-43' onClick={handleShow}>Contract Details</button>
        <br/>
        <button className='button-43' onClick={handleShow2}>Company Details</button>



        <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>{contract_name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                    <h3>Details: {service_items}</h3>
                    <h3>amount: {amount}</h3>
                    <h3>Details: {service_items}</h3>
                    <h3>legal office name: {legal_office_name}</h3>
                    <h3>employee number: {employee_number}</h3>
                    <h3>Cost: {total_cost} JOD</h3>
                    <h3>signing date: {signing_date}</h3>
                    <h3>expiration date: {expiration_date}</h3>
                    <h3>warranty start date: {warranty_start_date}</h3>
                    <h3>warranty end date: {warranty_end_date}</h3>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>





                  <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title>{company_name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                    <h3>location: {location}</h3>
                    <h3>Details: {service_items}</h3>
                    <h3>liaison officer name: {liaison_officer_name}</h3>
                    <h3>phone: {phone}</h3>
                  
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose2}>Close</Button>
                      </Modal.Footer>
                  </Modal>
       
       
      </div>
      </div>
      </div>
      </div>

 

  )
}

export default View