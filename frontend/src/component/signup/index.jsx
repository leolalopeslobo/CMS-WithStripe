import styles from "./styles.module.css"
import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { openPopupBtn, closePopupBtn } from "./tcpopup";
import logo from '../assests/logo_black.png'


const SignUp = () => {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });

    const [error,setError] = useState("")
    const [msg, setMsg] = useState("")

    

    //creating a function
    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/users"
            const {data:res} = await axios.post(url,data)
            setMsg(res.message)
        } catch(error){
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }


//     const [isPopupActive, setIsPopupActive] = useState(false);

//   const openPopupBtn = () => {
//     setIsPopupActive(true); // Activate the popup by setting the state
//   };

    // const openPopupBtn = () => {
    //     // classList.add("styles.popup_active")
    //     // document.body.classList.add("styles.popup_active")

    //     let className = this.state.className;
    //     className = className + '' + 'styles.popup_active'
    // }

    // const closePopupBtn = () => {
    //     // classList.remove("styles.popup_active")
    //     // document.body.classList.remove("styles.popup_active")
    // }

    return(

<div className={styles.signup_container}>

<div className={styles.logoContainer}>
    <img src={logo} alt="Logo" />
  </div>

            <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>Welcome Back</h1>
                <Link to="/login">
                    <button type="button" className={styles.white_btn}>Sign In</button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="Business Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Re-type Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                    />
                    <label for="accept-terms">
            <input type="checkbox" id="accept-terms" name="accept-terms" required/><span>&nbsp;</span>
            Agree to <a href="termsandconditions.html" target="_blank" className="text-[#4f46e5]">Terms and Conditions</a>
        </label>

        <div className={styles.popup_overlay}></div>
        <div class={styles.popup}>
        <h3>Terms and Conditions</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quas voluptatem magni nostrum doloribus temporibus atque commodi! Animi aliquam nobis nemo quasi quam, similique doloribus, deserunt, est quisquam corrupti quas?</p>
        <div className={styles.popup_close_btn}>&times;</div>
        </div>


                    {error && <div className={styles.error_msg}>{error}</div>}
                    {msg && <div className={styles.success_msg}>{msg}</div>}
                    <button type="submit" className={styles.green_btn}onSubmit={handleSubmit}>Sign Up</button>
                </form>
            </div>
            </div>

            <div className={styles.copyright}>
    <label htmlFor="accept-terms">
      © 2023 <a href="termsandconditions.html" target="_blank">Breachseal Technologies LLP</a>. All rights reserved.
    </label>
  </div>
            
        </div>



            
        
        
    )
};

export default SignUp;