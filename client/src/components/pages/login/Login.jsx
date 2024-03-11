import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import useLogIn from '../../../hooks/useLogin';

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} =    useLogIn();

    const togglePasswordVisibility = () => {
        setShowPass(prevState => !prevState);
    };

    const handelSubmit = async (e) => {
      e.preventDefault();
      await login(username, password)
    }

    return (
        <>
            <div className="whole-regipage">
                <form className="form" onSubmit={handelSubmit}>
                    <p className=" text-3xl flex items-center justify-center font-bold mb-2" style={{color:'black'}}>INTER S
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#FF9900"
                stroke-dasharray="2"
                stroke-dashoffset="2"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path d="M0 0">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.6s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="2;0"
                  />
                </path>
                <path d="M0 0">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.9s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.9s"
                    dur="1.2s"
                    values="2;0"
                  />
                </path>
                <animateTransform
                  attributeName="transform"
                  dur="30s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </g>
              <mask id="lineMdMoonFilledAltToSunnyFilledLoopTransition0">
                <circle cx="12" cy="12" r="12" fill="#fff" />
                <circle cx="18" cy="6" r="12" fill="#fff">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    dur="0.4s"
                    values="18;22"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    dur="0.4s"
                    values="6;2"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    dur="0.4s"
                    values="12;3"
                  />
                </circle>
                <circle cx="18" cy="6" r="10">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    dur="0.4s"
                    values="18;22"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    dur="0.4s"
                    values="6;2"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    dur="0.4s"
                    values="10;1"
                  />
                </circle>
              </mask>
              <circle
                cx="12"
                cy="12"
                r="10"
                fill=" #FF9900"
                mask="url(#lineMdMoonFilledAltToSunnyFilledLoopTransition0)"
              >
                <animate
                  fill="freeze"
                  attributeName="r"
                  dur="0.4s"
                  values="10;6"
                />
              </circle>
            </svg>
            CIAL</p>
                    <p className="title" style={{color:'#4c4b4b'}}>LOGIN</p>
                    <p className="message">SignIn now and get full access to our app. </p>

                    <label className=''>
                        <input required="" placeholder="Username" type="text" className="input text-6xl"  name="username" 
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        style={{fontSize:'1.2rem'}}
                        />
                    </label>

                    <label className='flex relative'>
                        <input required="" placeholder="Password" type={showPass ? "text" : "password"} className="input w-4/5 text-2xl"
                         value={password}
                         onChange={(e)=> setPassword(e.target.value)}
                         style={{fontSize:'1.2rem'}}
                        />
                        <span className='' style={{ display: 'flex', position: "absolute", right: '9%', cursor:'pointer', color:'black' }}>
                            {showPass ? (
                                <VisibilityOffIcon onClick={togglePasswordVisibility} />
                            ) : (
                                <RemoveRedEyeIcon onClick={togglePasswordVisibility} />
                            )}
                        </span>
                    </label>

                    <button className="cssbuttons-io" type="submit" disabled={loading}>
                              {loading ? (
                                <span className="loading loading-spinner loading-md"></span>
                              ): (
                                <span>Login</span>
                              )
                              }

                      
                      
                    </button>
                    <p className="signin">Dont have an account? <Link to="/signup">SignUp</Link> </p>
                </form>
            </div>
        </>
    );
};

export default Login;
