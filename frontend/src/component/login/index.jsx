import styles from "./styles.module.css"
import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'



const Login = ({ onLogin }) => {
    const [data, setData] = useState({
        email:"",
        password:""
    });


    const [error,setError] = useState("")


    //creating a function
    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
        onLogin(email);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/auth"
            const {data:res} = await axios.post(url,data)
            localStorage.setItem("token",res.data);
            window.location = "/"
      
        } catch(error){
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }

    return(
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
            <div className={styles.left}>
            <form className={styles.form_container}>
                    <h1>Login to your Account</h1>
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

<label for="accept-terms">
            <a href="termsandconditions.html" target="_blank">Terms and Conditions</a>
        </label>

                     <div className={styles.popup_overlay}></div>
        <div class={styles.popup}>
        <h3>Terms and Conditions</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quas voluptatem magni nostrum doloribus temporibus atque commodi! Animi aliquam nobis nemo quasi quam, similique doloribus, deserunt, est quisquam corrupti quas?</p>
        <div className={styles.popup_close_btn}>&times;</div>
        </div>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className={styles.green_btn}onSubmit={handleSubmit}>Sign In</button>
                </form>
            </div>
            <div className={styles.right}>
            <h1>New Here?</h1>
                <Link to="/signup">
                    <button type="button" className={styles.white_btn}>Sign Up</button>
                </Link>

                {/* <Link to="/subscriptions">
                    <button type="button" className={styles.white_btn}>Subscribe</button>
                </Link> */}
            </div>
            </div>
        </div>
    )
};

export default Login;