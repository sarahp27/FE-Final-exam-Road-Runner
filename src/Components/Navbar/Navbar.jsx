import React from 'react'
import styles from './Navbar.module.css'
import { Link, Route, useNavigate } from 'react-router-dom'

export default function Navbar() {
  // const nav = useNavigate();

  // const handleNavigate=()=>{
  //   nav('/');

  // }
  return (
    <>
      <div className={styles.navbar}>
       {/* <Route> */}

        <img alt="Road Runner Logo" src="https://raw.githubusercontent.com/jeff-lent/roadrunnercars/main/logo.png" width="140px" height="90px" 
        // onClick={handleNavigate}
        />

       {/* </Route> */}

        <h1>Road Runner </h1>
      </div>
    </>
  )
}
