import React from 'react';
import styles from './Form.module.css'
import { Link } from 'react-router-dom';

export const Form = () => {
  return (
    <>
    < div className={styles.form}>
     <h1 style={{ justifyContent: "center" }}>
        Confirm your Booking
      </h1>

      <div className={styles.check}>
        <form 
        // onSubmit={handleSubmit}
        >
          <div class="form-group" className={styles.formGroup}>
            <label for="exampleInputName">Enter your Name</label>
            <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Name"
            // value={name} onChange={handleNameChange} 
            required />
          </div>

          <div class="form-group" className={styles.formGroup}>
            <label for="exampleInputAddress">Address</label>
            <input type="input" class="form-control" id="exampleInputAddress" placeholder="Address" 
            // value={address} onChange={handleAddressChange} 
            required />
          </div>
          <div class="form-group" className={styles.formGroup}>
            <label for="exampleInputEmail1">Phone Number</label>
            <input type="number" class="form-control" id="quantity" aria-describedby="phoneHelp" required placeholder="Enter phone number" 
            // value={email} onChange={handleEmailChange}
             />

          </div>
          <div class="form-group" className={styles.formGroup}>
            <label for="exampleInputEmail1">Pickup Date</label>
            <input type="datetime-local" class="form-control" name="checkin" id="exampleInputArrDate" aria-describedby="ArrHelp" required 
            // value={arrDate} onChange={handleArrDate} 
            />
          </div>
          <div class="form-group" className={styles.formGroup}>
            <label for="exampleInputEmail1">Drop off Date</label>
            <input type="datetime-local" class="form-control" name="checkout" id="exampleInputArrDate" aria-describedby="ArrHelp"
            //  required value={depDate} onChange={handleDepDate}
              />

              <div class="form-group" className={styles.formGroup}>
              <label>  
            <input type="checkbox" className='form-group' name='damage' style={{marginTop:"30px", paddingLeft:"10px"}}
            // checked={poolRequired} 
            // onChange={handleCheckboxChange} 
            />
            Damage Insurance of Vehicle (15,000 Rs )
          </label>
              </div>
          </div>

          <div class="form-group" className={styles.formGroup}>
            <h2>Your Total price of stay will be: </h2>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Price</label>
              <input class="form-control" id="exampleInputPassword1" 
              // value={price1} 
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Total Price(Exclusive Tax)</label>
              <input class="form-control" id="exampleInputPassword1" 
              // value={totalwoTax} 
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Total Price(Inclusive Tax)</label>
              <input class="form-control" id="exampleInputPassword1"
              //  value={totalPrice} 
               />
            </div>
            {/* <button
                      
                         > */}
            {/* calculate my price of stay</button> */}

          </div>
          <div className={styles.btns}>
            <Link to ='/'>
          <button type="submit" class="btn btn-primary" >Choose a different car</button>
          </Link>
          <Link to = '/thanks'>
          <button type="submit" class="btn btn-primary" >Checkout</button>
          </Link>
         
          </div>
        </form>
      </div>
      </div>
    </>
  )
}
