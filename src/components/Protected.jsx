import React, { Component, useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/FirebaseContext';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component} = props;
    const {user} = useContext(FirebaseContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    }, [])
    

  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected