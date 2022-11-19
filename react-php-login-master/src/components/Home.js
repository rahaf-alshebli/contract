import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import React, {useEffect,useState} from 'react'
import axios from 'axios';


import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import { Modal,show,Button} from 'react-bootstrap';
import View from '../page/View';
import '../page/Card.css';
const Home = () => {
    const {user, logout} = useContext(UserContext);
  const navigate = useNavigate();
  const id = user.id;
console.log(id);
function getUser() {
  axios.get(`http://localhost/php-auth-api/edit.php/${id}`).then(function(response) {
      console.log(response.data);
      setInputs(response.data);
  });
}


const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
  event.preventDefault();

  axios.put(`http://localhost/php-auth-api/edit.php/${id}`, inputs).then(function(response){
      console.log(response.data);
      navigate('/Home');
  });
  
}
console.log(id)
    useEffect(() => {
        getUser();
    }, []);

  const [inputs, setInputs] = useState([]);

    useEffect( () => {
        window.scrollTo(0, 0);
        alluser();
      }, []); 
      // http://localhost/bor/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/apicrud/users.php
      const [isuser, setuser] = useState([]);
      const alluser = async (ids) => {
        try {
          axios.get(`http://localhost/apicrud/users.php`)
          .then(res => {
            // console.log(res.data.userlist.userdata)
            setuser(res.data.userlist.userdata);
          })
        } catch (error) { throw error;}    
      }
    
      
    


    
    return (
        
        <div className="home">
            
            <div className="container">
    <div className="row gutters">

      
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <form  onSubmit={handleSubmit}>
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-2 text-primary">Personal Details</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <input type="hidden" value={id} name="id"/>
          
                <div className="form-group">
                  <label htmlFor="fullName"> Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter full name"  
                  name="name"
                  onChange={handleChange}
                  value={inputs.name}/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail">Email</label>
                  <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" 
                  name="email"
                  
                  onChange={handleChange}
                  value={inputs.email}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="phone">department</label>
                  <input type="text" className="form-control" id="phone" placeholder="Enter phone number" 
                  name="department"
                    onChange={handleChange}
                  value={inputs.department}/>
                </div>
              </div>
            
            </div>
            <div className="row gutters">
              
              
              
              
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="zIp">password</label>
                  <input id="password" type="password"
                  className="form-control "
                  name="password" required
                  onChange={handleChange}
                  value={inputs.password}
                  
                  autocomplete="new-password" />
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right mt-4">
                
                  <button type="submit" id="submit" name="submit" className="btn btn-secondary mx-2">Cancel</button>
                  <button type="submit" id="submit" name="submit" className="btn btn-primary">Update</button>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        </form>
      </div>
    </div>
  </div>
            {isuser.map((item)=>
                <View key={item.id} {...item}/>)}
                
            <button onClick={logout} className="logout">Logout</button>
            <button  className="addcont"><a href="/insert"> Add a contract </a></button>
        </div>
    )
}

export default Home;

