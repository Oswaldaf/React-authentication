import React from 'react'
import Button from '../../Components/Button/Button'
import { Link, useNavigate } from "react-router-dom";
 


export default function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/')
  }
  
  return (
    <div>
          <h1>Dashboard</h1>
          <Button text={ 'Se Déconnecter'} onClick={logout}/>
    </div>
  )
}
