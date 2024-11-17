import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Donation = () => {
  return (
    <div className='donation-container'>
      <div className='donation-header'>
        <Link to='/services'><FaArrowLeft /> Back</Link>
      </div>

      <div className='donation-body'>
        <h1>Support Our Shelter</h1>
        
        <p>Your donation helps us provide food, medical care, and a safe environment for pets in need. Every contribution, big or small, makes a difference in the lives of these animals.</p>
        
        <h2>Ways to Donate</h2>
        <div className='donation-options'>
          <div className='donation-option'>
            <h3>One-Time Donation</h3>
            <p>Make a one-time donation to support immediate needs for food, shelter, and medical care.</p>
          </div>
          <div className='donation-option'>
            <h3>Monthly Donation</h3>
            <p>Become a recurring donor and help us provide ongoing care for our animals. Your support every month makes a lasting impact.</p>
          </div>
          <div className='donation-option'>
            <h3>Quarter Donation</h3>
            <p>Choose a pet to sponsor and cover their food, medical, and shelter once every quarter.</p>
          </div>
        </div>

        <div className='donation-form'>
          <h2>Make a Donation</h2>
          <form>
            <label>
              Donation Amount:
              <input type="number" placeholder="$50" required />
            </label>
            <label>
              Donation Type:
              <select>
                <option value="one-time">One-Time</option>
                <option value="monthly">Monthly</option>
                <option value="quarter">Quarter</option>
              </select>
            </label>
            <label>
              Card Number:
              <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" required />
            </label>
            <button type="submit" className='donate-btn'>Donate Now</button>
          </form>
        </div>
        
        <div className='donation-thanks'>
          <p>Thank you for your donation! Your support helps us provide essential care to our animals.</p>
        </div>
      </div>
    </div>
  );
};

export default Donation;


