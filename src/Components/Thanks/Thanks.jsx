import React from 'react'
import thanks from './thanks.gif'
import styles from './Thanks.module.css'
import { useNavigate } from 'react-router-dom'

export const Thanks = () => {

    const nav = useNavigate();


    const handleNavigate=()=>{
        nav('/');
    }

  return (
    <>
    <div>
    <div  className={styles.thanks}  >

        
     <img src={thanks} width="800px" height="600"/>
     <h1 style={{display:"flex",flexDirection: "column", alignItems:"center"}}> Thank You for Choosing Us</h1>
    </div>
    
     <button style={{color: "white", backgroundColor:"black", display:"flex", flexDirection:"column", alignItems:"center"}} onClick={handleNavigate}> Start Over</button>

    </div>
    
   
    </>
   
  )
}
