import React from 'react'

const AdoptionForm = () => {
    return (
      <div className="adoption-form">
        <h1>Adoption Form</h1>
        <form className='form-container'>
          {/* Add form fields here */}
          <label>
            Name:
          </label>
          <input type="text" name="name" />
          <label>
            Email:
          </label>
          <input type="email" name="email" />
          <label>
            Preferred pet:
          </label>
          <select name="role">
              <option value="matilda">Matilda</option>
              <option value="elsie">Elsie</option>
              <option value="paula">Paula</option>
              <option value="maddie">Maddie</option>
              <option value="luke">Luke</option>
              <option value="bluey">Bluey</option>
            </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default AdoptionForm;
  