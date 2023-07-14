import React, { useState } from 'react';
import styles from './Form.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Form = () => {

  // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [driverLicense, setdriverLicense] = useState('');
  const [pickupTime, setpickupTime] = useState('');
  const [dropoffTime, setdropoffTime] = useState('');
  const [insurance, setInsurance] = useState(false);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [insurancePrice, setInsurancePrice] = useState(0);
  const [insurancePricewithoutTotal, setInsurancePricewithoutTotal] = useState(0);

  const [data, setData] = useState({});


  const location = useLocation();

  const car = location.state


  // const car = state.state;


  // console.log(location.state);


  // console.log(data)
  const { id } = useParams();
  const [storage, setStorage] = useState(() => {
    // getting stored value



    // localStorage.setItem("name", JSON.stringify(name));
    // localStorage.setItem("address", JSON.stringify(address));
    // localStorage.setItem("phoneNumber", JSON.stringify(phoneNumber));
    // localStorage.setItem("driverLicense", JSON.stringify(driverLicense));

    // const saved = localStorage.getItem("name", "address", "phoneNumber", "driverLicense");
    // const initialValue = JSON.parse(saved);
    // return initialValue;


  });

  useEffect(()=>{
    let storageData = localStorage.getItem("getStoredData");
      if(storageData){
      storageData=JSON.parse(storageData);
      
        setName(storageData?.name );
        setAddress(storageData?.address);
        setphoneNumber(storageData?.phoneNumber);
        setdriverLicense(storageData?.driverLicense);
        setpickupTime(storageData?.pickupTime);
        setdropoffTime(storageData?.dropoffTime);
        console.log("data")
      }
  },[])


  useEffect(() => {


    if (pickupTime && dropoffTime) {
      const daysCount = Math.floor(
        (new Date(dropoffTime) - new Date(pickupTime)) / (1000 * 3600 * 24) + 1);

      if (dropoffTime < pickupTime) {
        setTotalPrice(0);
        setInsurancePrice(0)
      }
      else {
        fetch(`http://localhost:8081/cars/get/${id}`)
          .then((data) => data.json())
          .then((data) => {
            const calculatedPrice1 = data.price;
            setPrice(calculatedPrice1);
            const calculatedPrice = (calculatedPrice1 * daysCount);
            setTotalPrice(calculatedPrice);

            // let storageData = localStorage.getItem("getStoredData");
            // if(storageData.length>0){
            // storageData=JSON.parse(storageData);
            
            //   setName(storageData?.name );
            //   setAddress(storageData?.address);
            //   setphoneNumber(storageData?.phoneNumber);
            //   setdriverLicense(storageData?.driverLicense);
            //   setpickupTime(storageData?.pickupTime);
            //   setdropoffTime(storageData?.dropoffTime);
            //   console.log("data")
            // }
            // console.log(data);
            

            if (insurance === true) {
              const insuredPricewithTotal = calculatedPrice + (daysCount * 15000);
              // console.log({insuredPrice})
              setInsurancePrice(insuredPricewithTotal);

              const insuredPrice = daysCount * 15000;
              setInsurancePricewithoutTotal(insuredPrice)
            }
            else {
              setInsurancePrice(0)
            }
            setData(data)
          }

          )
          .catch((e) => console.log(e));

      }
    };
  }, [pickupTime, dropoffTime, id, insurance, storage]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/thanks/${car.id}`, { state: car })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (insurance !== false) {
      const rentalData = {
        id: id,
        car_id: car.id,
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        driverLicense: driverLicense,
        pickupTime: pickupTime,
        dropoffTime: dropoffTime,
        insurance: insurance,
        price: price,
        totalPrice: totalPrice
      };

      fetch("http://localhost:8082/rental/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rentalData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Rental data successfully submitted:", data);
        })
        .catch((error) => {
          console.error("Error submitting Rental data:", error);
        });

      const damageData = {
        id: id,
        car_id: 6,
        name: "damage waiver",
        address: "address",
        phoneNumber: 0,
        driverLicense: driverLicense,
        pickupTime: pickupTime,
        dropoffTime: dropoffTime,
        insurance: insurance,
        price: price,
        totalPrice: insurancePricewithoutTotal
      }

      // console.log( )

      fetch("http://localhost:8082/rental/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(damageData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Booking data successfully submitted:", data);
        })
        .catch((error) => {
          console.error("Error submitting booking data:", error);
        });

    }
    else {
      const rentalData = {
        id: id,
        car_id: car.id,
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        driverLicense: driverLicense,
        pickupTime: pickupTime,
        dropoffTime: dropoffTime,
        insurance: insurance,
        price: price,
        totalPrice: totalPrice
      }

      // console.log( )

      fetch("http://localhost:8082/rental/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rentalData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Booking data successfully submitted:", data);
        })
        .catch((error) => {
          console.error("Error submitting booking data:", error);
        });
    }
    navigate('/thanks')
    // console.log("data chala gaya")
  };


  const handleStorage = () => {
    const storageData = {
      name: name,
      address: address,
      phoneNumber: phoneNumber,
      driverLicense: driverLicense,
      pickupTime:pickupTime,
      dropoffTime:dropoffTime
    }

    localStorage.setItem("getStoredData", JSON.stringify(storageData));
    navigate('/');
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setphoneNumber(event.target.value);
  };

  const handleLicense = (event) => {
    setdriverLicense(event.target.value);
  }

  const handlePickup = (event) => {
    setpickupTime(event.target.value);
  }

  const handleDropoff = (event) => {
    setdropoffTime(event.target.value);
  }

  const handleInsurance = () => {
    // console.log("checked")
    setInsurance(!insurance);

  };


  return (
    <>
      <div className={styles.main}>

        < div data-testid="confirmation" className={styles.form}>
          <h1  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            Confirm your Car
          </h1>

          <div className={styles.check}>

            <form onSubmit={handleSubmit}>
              {/* <div className={styles.formImg}> */}
              <div className={styles.formImg} >
                <div class="col-md-6" className={styles.basicForm}>
                 
                  <div class="form-group" className={styles.formGroup}>
                    <label for="exampleInputName">Enter your Name</label>
                    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Name"
                      value={name} onChange={handleNameChange}
                      required />
                  </div >

                  <div class="form-group" className={styles.formGroup}>
                    <label for="exampleInputAddress">Address</label>
                    <input type="text" class="form-control" id="exampleInputAddress" placeholder="Address"
                      value={address} onChange={handleAddressChange}
                      required />
                  </div>
                  <div class="form-group" className={styles.formGroup}>
                    <label for="exampleInputPhone">Phone Number</label>
                    <input type="text" class="form-control" id="quantity" aria-describedby="phoneHelp" required placeholder="Enter phone number"
                      value={phoneNumber} onChange={handlePhoneChange}
                    />

                  </div>

                  <div class="form-group" className={styles.formGroup}>
                    <label for="exampleInputLicense">License Number</label>
                    <input type="text" class="form-control" id="quantity" aria-describedby="phoneHelp" required placeholder="Enter Driver's License Number"
                      value={driverLicense} onChange={handleLicense}
                    />

                  </div>

                  <div class="form-group" className={styles.formGroup}>
                    <label for="exampleInputPickup">Pickup Date</label>
                    <input type="datetime-local" class="form-control" name="checkin" id="exampleInputPickupDate" aria-describedby="ArrHelp" required
                      value={pickupTime} onChange={handlePickup}
                    />
                  </div>
                  <div class="form-group" className={styles.formGroup}>
                    <label for="exampleInputDropoff">Drop off Date</label>
                    <input type="datetime-local" class="form-control" name="checkout" id="exampleInputDropoffDate" aria-describedby="ArrHelp"
                      required
                      value={dropoffTime} onChange={handleDropoff}
                    />
                  </div>
                  </div>
                  <div
                    //  class="col-md-6"
                    className={styles.image}>
                    <img src={car.image} alt= {car.name } width="500px" />
                    <h2>{car.name}</h2>

                  </div>
                </div>

            

              {/* Payment Div */}
              <div className={styles.payment}>

                <div class="form-group" className={styles.formGroup}>
                  <h2>Payment In Rupees </h2>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Per day Price in Pakistani Rupee</label>
                    <input class="form-control" id="examplePrice"
                      value={price}
                    // onChange={handlePrice}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Total Price in Pakisani Rupee</label>
                    <input class="form-control" id="exampleTotalPrice"
                      value={totalPrice}
                    />
                  </div>

                  <div class="form-group" className={styles.formGroup}>
                    <label>
                      <input type="checkbox" className='form-group' name='damage' style={{ marginTop: "30px", paddingLeft: "10px", marginRight: "10px", marginBottom: "20px" }}
                        checked={insurance}
                        onChange={handleInsurance}
                      />
                      Damage Insurance of Vehicle (15,000 Rs Per Day )
                    </label>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Total Price with Damage Insurance</label>
                    <input class="form-control" id="examplePricewithInsurance"
                      value={insurancePrice}
                    />
                  </div>
                </div>

                {/* <button
                      
                         > */}
                {/* calculate my price of stay</button> */}

              </div>
              <div className={styles.btns}>

                  <button name="car" onClick={handleStorage} > Choose a different car</button>
                {/* <Link to='/thanks'> */}
                <button name ="checkout"type='submit' >Checkout</button>
                {/* </Link> */}

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
