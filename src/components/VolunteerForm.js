import React from 'react';

const VolunteerForm = () => {
  return (
    <div className="volunteer-form">
      <h1>Volunteer Form</h1>
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
          Preferred Role:
        </label>
        <select name="role">
            <option value="pet-socializer">Pet Socializer</option>
            <option value="event-helper">Event Helper</option>
            <option value="kennel-companion">Kennel Companion</option>
          </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
