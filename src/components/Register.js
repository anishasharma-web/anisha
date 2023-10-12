import React, { useState } from 'react';

//(functional component) initializes a state variable formData using the useState hook. 
//It stores form data, username, password, and email.
function Register() {
  const [formData, setFormData] = useState({ 
    username: '', 
    password: '', 
    email: '' 
});

  const handleChange = (e) => {
    setFormData({ ...formData, 
        [e.target.name]: e.target.value });
         
//then updating the field specified by e.target.name with the new value e.target.value. 
//This allows the form fields to be controlled by React.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
