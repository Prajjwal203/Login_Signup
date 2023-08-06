import React from "react";

const SignupPage = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />

        <label htmlFor="createUsername">Create Username:</label>
        <input type="text" id="createUsername" name="createUsername" />

        <label htmlFor="createPassword">Create Password:</label>
        <input type="password" id="createPassword" name="createPassword" />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />

        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <a href="/">Login here</a>
      </p>
    </div>
  );
};

export default SignupPage;
