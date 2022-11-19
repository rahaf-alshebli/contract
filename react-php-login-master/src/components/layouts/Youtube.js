import axios from "axios";
import React, { Component } from 'react';
import  { useEffect, useState } from "react";


const baseURL = "http://localhost/apicrud/youtube.php";

function Youtube(){
  const [post, setPost] = useState('');

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);

    });
  }, );
  
  return (
    
    <div className="Youtube">
          <iframe className="cont" width="90%" height="515" src={post.jojo}
            title="DELPHIN BOTANIK PLATINUM HOTEL -  Promotion Video" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>

  );
}

export default  Youtube;
