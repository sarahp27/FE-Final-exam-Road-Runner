import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

export const Detail = () => {

    const location = useLocation();

    const car = location.state

    console.log(location.state)

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/rentCar/${car.id}`, { state: car })
    }


    return (
        <div className="detailCard">

            <div className="styles.details" >
                <h2>{car.name}</h2>
                <img src="https://raw.githubusercontent.com/jeff-lent/roadrunnercars/main/PorscheMissionX.png" alt='name' width="500px" height="500px" />
                {/* <p>
                    <b>Name: </b>
                    {car.name}

                </p> */}
                <p>
                    <b>Description:</b>
                    {car.longDesc}
                </p>

                <p>Daily Rental Price:
                    <b>{car.price} Rs</b>
                </p>

                <Link to={`/rentCar/${car.id}`}>
                    <button
                        onClick={handleNavigate}
                    >Rent Me Now</button>
                </Link>
            </div>
        </div>

    )
}
