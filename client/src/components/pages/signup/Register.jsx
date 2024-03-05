import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import "../../styles/register.css";
import { Link } from "react-router-dom";
import useSignUp from "../../../hooks/useSignUp";
const Register = () => {
  const [inputs, setInputs] = useState({
    fullname:"",
    username: "",
   password: "",
    confirmPassword: "",
    gender:""
  });

const {loading , signUp} = useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(inputs)
   await signUp(inputs)
  };

  const handleGenderChange = (gender) => {
    console.log("Selected Gender:", gender);
    setInputs({...inputs, gender});
  };
  return (
    <>

      <div className="whole-regipage">
        <form className="form " onSubmit={handleSubmit}>
          <p className="title">
            JOIN INTER S
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
                fill="#ffff00"
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
            CIAL
          </p>
          <p className="message">Signup now and get full access to our app. </p>

          <label htmlFor="" className="">
            <input
              required=""
              placeholder="Full Name "
              type="text"
              className="input"
              value={inputs.fullname}
              onChange={(e)=> setInputs({...inputs,fullname:e.target.value})}
            />
          </label>

          <label>
            <input
              required=""
              placeholder="Username"
              type="text"
              className="input"
              id="email"
              name="email"
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs, username:e.target.value})}
            />
          </label>

          <label>
            <input
              required=""
              placeholder="Password"
              type="password"
              className="input"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs,password:e.target.value})}
            />
          </label>
          <label>
            <input
              required=""
              placeholder="Confirm Password"
              type="password"
              className="input"
              id="password"
              name="password"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </label>
          <div className="genderDiv flex gap-3 items-start justify-start w-full ">
          <div className="relative flex h-[50px] w-[50px] items-center justify-center" title="male">
      <input
        type="radio"
        id="radio"
        name="gender"
        checked={inputs.gender === "male"}
        value="male"
        onChange={() => handleGenderChange("male")}
        className="peer z-10 h-full w-full cursor-pointer opacity-0"
      />
      <div
        className="absolute h-full w-full rounded-full bg-blue-100 p-4 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"
      ></div>
      <div
        className="absolute -z-10 h-full w-full scale-0 rounded-full bg-blue-200 duration-500 peer-checked:scale-[500%]"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute stroke-blue-400"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5631 16.1199C14.871 16.81 13.9885 17.2774 13.0288 17.462C12.0617 17.6492 11.0607 17.5459 10.1523 17.165C8.29113 16.3858 7.07347 14.5723 7.05656 12.5547C7.04683 11.0715 7.70821 9.66348 8.8559 8.72397C10.0036 7.78445 11.5145 7.4142 12.9666 7.71668C13.9237 7.9338 14.7953 8.42902 15.4718 9.14008C16.4206 10.0503 16.9696 11.2996 16.9985 12.6141C17.008 13.9276 16.491 15.1903 15.5631 16.1199Z"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M14.9415 8.60977C14.6486 8.90266 14.6486 9.37754 14.9415 9.67043C15.2344 9.96332 15.7093 9.96332 16.0022 9.67043L14.9415 8.60977ZM18.9635 6.70907C19.2564 6.41617 19.2564 5.9413 18.9635 5.64841C18.6706 5.35551 18.1958 5.35551 17.9029 5.64841L18.9635 6.70907ZM16.0944 5.41461C15.6802 5.41211 15.3424 5.74586 15.3399 6.16007C15.3374 6.57428 15.6711 6.91208 16.0853 6.91458L16.0944 5.41461ZM18.4287 6.92872C18.8429 6.93122 19.1807 6.59747 19.1832 6.18326C19.1857 5.76906 18.8519 5.43125 18.4377 5.42875L18.4287 6.92872ZM19.1832 6.17421C19.1807 5.76001 18.8429 5.42625 18.4287 5.42875C18.0145 5.43125 17.6807 5.76906 17.6832 6.18326L19.1832 6.17421ZM17.6973 8.52662C17.6998 8.94082 18.0377 9.27458 18.4519 9.27208C18.8661 9.26958 19.1998 8.93177 19.1973 8.51756L17.6973 8.52662ZM16.0022 9.67043L18.9635 6.70907L17.9029 5.64841L14.9415 8.60977L16.0022 9.67043ZM16.0853 6.91458L18.4287 6.92872L18.4377 5.42875L16.0944 5.41461L16.0853 6.91458ZM17.6832 6.18326L17.6973 8.52662L19.1973 8.51756L19.1832 6.17421L17.6832 6.18326Z"
        ></path>
      </svg>
          </div>
          <div className="relative flex h-[50px] w-[50px] items-center justify-center" title="female">
      <input
        type="radio"
        id="radio"
        name="gender"
        checked={inputs.gender === "female"}
                value="female"
                onChange={() => handleGenderChange("female")}
        className="peer z-10 h-full w-full cursor-pointer opacity-0"
      />
      <div
        className="absolute h-full w-full rounded-full bg-pink-100 p-2 shadow-sm shadow-[#00000050] ring-pink-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"
      ></div>
      <div
        className="absolute -z-10 h-full w-full scale-0 rounded-full bg-pink-200 duration-500 peer-checked:scale-[500%]"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute fill-pink-400"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z"
        ></path>
      </svg>
          </div>
          </div>
          <button className="cssbuttons-io" type="submit">
            <span>Register</span>
          </button>
          <p className="signin">
            Already have an acount ? <Link to="/signIn">Login</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
