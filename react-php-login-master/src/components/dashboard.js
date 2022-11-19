
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {useEffect,useState} from 'react'
import {useContext} from 'react'
import axios from 'axios';
import {UserContext} from '../context/UserContext';
import View from '../page/View';
function Dashboard() {
   const {user, logout} = useContext(UserContext);
  useEffect( () => { 

    window.scrollTo(0, 0);
    alluser();
  }, []); 
  // http://localhost/bor/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/apicrud/users.php
  const [isuser, setuser] = useState([{}]);
  const alluser = async (ids) => {
    try {
      axios.get(`http://localhost/apicrud/users.php`)
      .then(res => {
         console.log(res.data.userlist.userdata)
        setuser(res.data.userlist.userdata);
        
      })
    } catch (error) { throw error;}    
  }
  console.log(isuser)

  return (
    <div className="page">
        
    <div className="sidebar"> 
        <img src={require('../articles.jpg').default} alt=""/> 
        <a href="/"> <i class="fa-solid fa-house"></i>&emsp;  <p className="two"> Home Page </p>  </a>
        <a href="/contracts"> <i class="fa-solid fa-sheet-plastic"></i>&emsp;   <p clas="one">Contracts </p> &nbsp; &nbsp;</a>
    
        
    </div>
        
    <div class="buttons">
        <button  class="logout" className="button-71" style={{backgroundColor:"red"}} onClick={logout}>  Log Out </button>
        <button class="button-71" > Profile  </button> 
    


   
    </div><div class="contracts-container">
    
  {isuser.map((user) => 
    
   <div className="card">

<div className="title">Standard</div>
<div className="features">
  <ul>
    <li>{user.contract_name}</li>
    <li>{user.service_items}</li>
    <li>{user.total_cost} JOD</li>
    <li><span>1</span> Hour free support</li>
  </ul>
</div>

<a href="#" class="btn">view full contract insight</a>
<a href="#" class="btn">view Company Info</a>

</div>
   
  
  )}
    </div>
    </div>
    
  )
}

export default Dashboard









