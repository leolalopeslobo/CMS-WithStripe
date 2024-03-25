import React from 'react'
import success from "../subscriptions/success.png"
import profile_image from "./profile_image.png"

const userData = [
    {
        first_name: "Mark",
        last_name: "Smith",
        src: profile_image,
        email_id: "marksmith@gmail.com"
    }
]
const Profile = () => {
    return (
        <div className="bg-white px-4 py-3 rounded-sm border border-grey-200 mt-2">
        <h1 className="text-4xl font-bold text-lg font-bold text-[#4f46e5]">Profile Details</h1>
        {userData.map((user) => (
          <div key={user.id} className="flex flex-row items-center justify-between">
            <div>
              <h1 className="text-xl"><b>Name:</b> {user.first_name} {user.last_name}</h1>
              <h1 className="text-xl"><b>Email:</b> {user.email_id}</h1>
              <h1 className="text-xl"><b>Date of Joining:</b> {new Date('2022-06-15').toLocaleDateString()}</h1>
              <h1 className="text-xl"><b>Number of Active Services:</b> 3</h1>
            </div>
            <div className="flex">
              <img src={user.src} alt={`${user.first_name} ${user.last_name}`} width={100} height={100} className="mr-2" />
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Profile;
