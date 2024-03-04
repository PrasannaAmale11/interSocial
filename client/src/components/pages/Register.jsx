import React, { useState } from 'react'
import '../styles/register.css'
import { Link } from 'react-router-dom';
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/register', formData);
          console.log('Registration successful:', response.data);
          // Redirect or show a success message to the user
        } catch (error) {
          console.error('Registration failed:', error.response.data);
          // Show an error message to the user
        }
      };
  return (
    <>
    <div className="whole-regipage" >
    <form className="form" onSubmit={handleSubmit}>
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        
            <label htmlFor="" className='nameLabel'>
            <input required="" placeholder="First Name " type="text" className="input"/>
            
            </label>

         <label htmlFor="" className='nameLabel'>
            <input required="" placeholder="Last Name" type="text" className="input"/>  
            </label>
    </div>  
            
    <label>
        <input required="" placeholder="Email" type="email" className="input"  id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}/>
     
    </label> 
        
    <label>
        <input required="" placeholder="Password" type="password" className="input"/>
      
    </label>
    <label>
        <input required="" placeholder="Confirm Password" type="password" className="input"  id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}/>
        
    </label>
    <button className="cssbuttons-io" type="submit"><span>Register</span></button>
    <p className="signin">Already have an acount ? <Link to="/signIn">Signin</Link> </p>
</form>
</div>
    </>
  )
}

export default Register