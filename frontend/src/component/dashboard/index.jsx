// import styles from './styles.module.css'

import { Link } from "react-router-dom";
import Orders from "../orders";
import Profile from "../userprofile";

const Dashboard = () => {

    // const handleLogout = () => {
    //     localStorage.removeItem("token")
    //     window.location.reload();
    // }
    return (
        // <div className={styles.main_container}>
        //     <div className={styles.main_container}>

        <>
        <div className="w-full h-full flex flex-col bg-neutral-200 overflow-y-hidden">
            <div></div>
            {/* <nav className={styles.navbar}> */}
            {/*<nav>
                <h1>Dashboard</h1>
                 <button className={styles.white_btn} onClick={handleLogout}>Logout</button> 
                <Link to="/subscriptions" className="underline">Go to Subsciptions</Link>
                <button>Logout</button>
            </nav>*/}

            <Profile />
            <Orders />
            
        </div>
        </>
    )
};


export default Dashboard;