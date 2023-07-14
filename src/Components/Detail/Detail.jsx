import React from 'react';
// import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css'

export const Detail = () => {

    const location = useLocation();

    const car = location.state

    console.log(car)

    const navigate = useNavigate();
    const handleNavigate = (car) => {
        navigate(`/rentCar/${car.id}`, { state: car })
    }


    return (
        <div className={styles.detailCard}>
            {/* <div  class="row align-items-start" style={{ display: 'flex', flexDirection: "row", alignItems: "center"  }}> */}

                <div
                // < div class="col-md-6" 
                className={styles.details} >
                    <img src={car.image} alt={car.name} width="500px" height="500px" />
                </div>


                <div 
                class="col-md-6"
                 className={styles.left}>

                    <h2>{car.name}</h2>
                    <p style={{marginTop:"10px"}}>
                        
                        <b>Description:</b>
                        {car.longDesc}
                    </p>

                    <p style={{marginTop:"10px"}}>Daily Rental Price: 
                        <b>{car.price} Rs</b>
                    </p>
                    <button style={{marginTop:"10px"}}
                       onClick={() => handleNavigate(car)}
                    >Rent Me Now</button>
                </div>

            {/* </div> */}
        </div>

    )
}
