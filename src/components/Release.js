import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Release = () => {
  return (
    <div className='release-container'>
      <div className='release-header'>
        <Link to='/services'><FaArrowLeft /> Back</Link>
      </div>

      <div className='release-body'>
        <h1>Release a Pet</h1>
        <p>
          Our Pet Heaven is here to assist if you're facing the difficult decision of parting with your pet. Please fill out this form completely and provide truthful information.
        </p>
        
        <h2>Pet Release Form</h2>
        <form className='release-form'>
          <label>
            Pet's Name:
            <input type="text" name="petName" required />
          </label>
          <label>
            Age:
            <input type="number" name="age" required />
          </label>
          <label>
            Breed:
            <input type="text" name="breed" required />
          </label>
          <label>
            Gender:
            <select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Health Information:
            <textarea name="healthInfo" placeholder="Vaccination status, medical conditions, etc." />
          </label>
          <label>
            Reason for Releasing:
            <textarea name="reason" placeholder="Describe why you need to release the pet" required />
          </label>
          <label>
            Upload a Recent Photo:
            <input type="file" name="photo" accept="image/*" />
          </label>
          <div className="terms">
            <input type="checkbox" name="terms" required />
            <span> I understand that by submitting this form, I am relinquishing ownership of my pet.</span>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>If you have questions about the release process, feel free to contact us refering to information below.</p>
        </div>
      </div>
    </div>
  );
};

export default Release;

