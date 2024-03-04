import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [showPass, setShowPass] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPass(prevState => !prevState);
    };

    return (
        <>
            <div className="whole-regipage">
                <form className="form">
                    <p className="title">SignIn</p>
                    <p className="message">SignIn now and get full access to our app. </p>

                    <label className=''>
                        <input required="" placeholder="Email" type="email" className="input" id="email" name="email" />
                    </label>

                    <label className='flex relative w-screen'>
                        <input required="" placeholder="Password" type={showPass ? "text" : "password"} className="input w-4/5" />
                        <span className='' style={{ display: 'flex', position: "absolute", right: '9%', cursor:'pointer' }}>
                            {showPass ? (
                                <VisibilityOffIcon onClick={togglePasswordVisibility} />
                            ) : (
                                <RemoveRedEyeIcon onClick={togglePasswordVisibility} />
                            )}
                        </span>
                    </label>

                    <button className="cssbuttons-io" type="submit"><span>Login</span></button>
                    <p className="signin">Don't have an account? <Link to="/">Register</Link> </p>
                </form>
            </div>
        </>
    );
};

export default Signin;
