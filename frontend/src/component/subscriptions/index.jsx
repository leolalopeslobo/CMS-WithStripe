import React, { useState } from "react";
import vulnerability_assessment from './vulnerability_assessment.png'
import compliance from './compliance.png'
import brand_monitoring from './brand_monitoring.png'
import soc from './soc.png'




// const data = [
//     {
//         id:1,
//         src:success,
//         title: "Vulnerability Assessment",
//         price: "99",
//     },
//     {
//         id:2,
//         // src:pro,
//         title: "Compliance",
//         price: "499",
//     },
//     {
//         id:3,
//         // src:business,
//         title: "Brand Monitoring",
//         price: "999",
//     },
//     {
//         id:4,
//         // src:business,
//         title: "SOC",
//         price: "999",
//     },
// ]


const data = [
    {
      id: 1,
      src: vulnerability_assessment,
      title: "Vulnerability Assessment",
      yearlyPrice: "One-Time Plan: ₹20000",
      monthlyPrice: "One-Time Plan: ₹20000",
      description : "It is the systematic identification and prioritization of security weaknesses in systems, networks, or applications, offering insights for effective threat mitigation in organizations.",
      benefits: [
        "✔ Proactive risk ID",
        "✔ Custom threat intel",
        "✔ Remediation guidance",
        "✔ Continuous monitoring"
      ].map((benefit, index, array) => (
        <React.Fragment key={index}>
          {benefit}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ))
    },
    {
      id: 2,
      src:compliance,
      title: "Compliance",
      yearlyPrice: "One-Time Plan: ₹20000",
      monthlyPrice: "One-Time Plan: ₹20000",
      description: "It involves aligning with regulations and standards to protect data, ensuring legal adherence and a secure digital environment.",
      benefits: [
        "✔ Data integrity assurance",
        "✔ Tailored risk management",
        "✔ Continuous compliance monitoring",
        "✔ Legal safeguards"
      ].map((benefit, index, array) => (
        <React.Fragment key={index}>
          {benefit}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ))
    },
    {
      id: 3,
      src: brand_monitoring,
      title: "Brand Monitoring",
      yearlyPrice: "₹ 12000",
      monthlyPrice: "₹ 1000",
      description: "In cybersecurity safeguards an organization's digital presence, swiftly addressing threats and unauthorized brand use to maintain reputation and integrity proactively.",
      benefits: [
        "✔ Safeguard online identity.",
        "✔ Swiftly address threats.",
        "✔ Detect unauthorized brand use.",
        "✔ Maintain reputation and integrity."
      ].map((benefit, index, array) => (
        <React.Fragment key={index}>
          {benefit}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ))
    },
    {
      id: 4,
      src: soc,
      title: "SOC",
      yearlyPrice: "₹ 12000",
      monthlyPrice: "₹ 1000",
      description: "A Security Operations Center (SOC) is a cybersecurity hub that monitors, detects, and responds to security incidents in real-time, safeguarding an organization's digital assets.",
      benefits: [
        "✔ Real-time monitoring.",
"✔ Detects & responds to security incidents.",
"✔ Defends against cyber threats.",
"✔ Safeguards digital assets continuously."
      ].map((benefit, index, array) => (
        <React.Fragment key={index}>
          {benefit}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ))
    },
  ];


const Home = () => {

    //Checking if the user is locked in or not
    // const [userId, setUserId] = useState(""); //initializing with empty state
    // const [userName, setUserName] = useState("")

    
    // useEffect(()=>{
        
    // },[userId]);



        const [isToggled, setToggled] = useState(false);
      
        const handleToggle = () => {
          setToggled(!isToggled);
        };


          const getPrice = (isToggled, yearlyPrice, monthlyPrice) => {
            return isToggled ? `${yearlyPrice}` : `${monthlyPrice}`;
          };

        // const [enabled, setEnabled] = useState(false)




const checkout = (plan) => {
  fetch("http://localhost:3000/api/v1/create-subscription-checkout-session",{
    method: "POST",
    headers: {
      "Content-Type":"application.json",
    },
    mode: "cors",
    // body: JSON.stringify({plan:plan,customerId:user.id})
  })
  .then((res)=>{
    if(res.ok) return res.json()
    console.log(res);
    return res.json().then((json)=> Promise.reject(json));
  })
  .then(({session})=>{
    window.location = session.url
  })
  .catch((e)=>{
    console.log(e.error);
  })
}



    return(
        <>
     

     {/* <Link to="/dashboard" className="underline">Go to Home</Link> */}

        <div className="flex flex-col items-center w-full mx-auto h-screen diagonal-background overflow-x-hidden">
            {/* <div className="flex justify-between items-center w-full px-6 h-20 bg-[#00000012] bg-[#4f7cff]"> */}
                {/* <div className="text-4xl font-bold text-white">Services</div> */}
            
            {/* <div className="flex justify-content items-center gap-2">

                
                    <a href="/login" className="bg-white px-4 py-2 uppercase w-auto rounded-lg text-xl text-[#4f7cff] font-semibold">Login</a>

                
                <div className="flex justify-center items-center space-x-4">
                    <span className="text-white text-xl">username</span>
                    <button className='bg-white px-4 py-2 w-auto rounded-lg text-base uppercase font-semibold text-[#4f7cff]'>Logout</button>
                </div>
                </div> */}

                
            {/* </div> */}
            <div className="flex flex-col items-center p-6"><h5 className="text-lg font-bold text-[#4f46e5]">Services</h5>
                <h2 className="text-3xl font-bold mt-3">Plans for all purposes</h2>
                <p className="text-center mt-3">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
                
                <div>
                <button
  onClick={handleToggle}
  className={`relative inline-block w-32 h-8 bg-gray-300 rounded-full p-1 transition-transform duration-300 mt-3 ${
    isToggled ? 'bg-blue-500' : ''
  }`}
>
  <span className="absolute inset-0 flex items-center justify-center">
    <span className="text-[#4f46e5] font-bold">{isToggled ? 'Annually' : 'Monthly'}</span>
  </span>
  <div
    className={`items-center w-6 h-6 bg-white rounded-full shadow-md transform ${
      isToggled ? 'translate-x-24' : 'translate-x-0'
    }`}
  />
</button>
      {/* <p>Price: {getPrice()}</p> */}
    </div>


{/* <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch> */}

                </div>
            
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 z-50 p-6 mb-20">
                {data.map((item, idx) => (
                    <div key={idx}
                    className="bg-white px-6 py-8 rounded-3xl text-[#4f7cff] w-full mx-auto grid place-items-center border-gray-300 border border-[#4f46e5]">
                        {/* <FontAwesomeIcon icon={faShieldHalved} className="h-10"/> */}
                        <img src={item.src} alt="" width={60} height={60} className=""/>
                        <div className="text-xl text-center py-4 font-bold text-black">{item.title}</div>
                        <p className="lg:text-sm textxs text-center px-6 text-slate-800">{item.description}</p>
                        <div className="lg:text-sm textxs text-center px-6 text-slate-800 mt-3">{item.benefits}</div>
                        <div className="text-2xl text-center font-bold text-[#000] py-4">
                        {/* ₹{item.price} */}
                        <p>{getPrice(isToggled, item.yearlyPrice, item.monthlyPrice)}</p>
                        </div>
                        <div className="mx-auto flex justify-content-center items-center my-3">
                            <button 
                            
                            onClick={() => window.location.href = "https://buy.stripe.com/test_6oE9AA5uoalb156bII"}
                            
                            className="bg-[#4f46e5] text-white rounded-md text-base uppercase w-32 py-3 font-bold">
                                Buy Plan
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
};

export default Home;