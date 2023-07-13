import React from 'react';
// import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css'

export const Detail = () => {

    const location = useLocation();

    const car = location.state

    console.log(car)

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/rentCar/${car.id}`)
    }


    return (
        <div className={styles.detailCard}>

            <div class="col-md-6 mb-md-0 p-md-4" className={styles.details} >
                <img src={car.image} alt='name' width="500px" height="500px" />
</div>
                <div class="col-md-6 mb-md-0 p-md-4" className={styles.left}>
                    
                    <h2>{car.name}</h2>
                    <p>
                        <b>Description:</b>
                        {car.longDesc}
                    </p>

                    <p>Daily Rental Price:
                        <b>{car.price} Rs</b>
                    </p>
                    <button
                        onClick={handleNavigate}
                    >Rent Me Now</button>


                </div>
            </div>


        // </div>

    )
}
