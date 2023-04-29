import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail: ${email}`);
    alert(`Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail: ${email}`);
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Full Name:
        <input
          className={styles.formInput}
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </label>

      <label className={styles.formLabel}>
        Phone Number:
        <input
          className={styles.formInput}
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>

      <label className={styles.formLabel}>
        Email:
        <input
          className={styles.formInput}
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <button className={styles.formButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;


