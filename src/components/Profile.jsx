import react, { useEffect, useState } from "react";

const Profile = ({name,location,contact}) =>{

    const [count] = useState(0);
    const [count2] = useState(1);

   
    return(
        <div className="user-card">
            <h1>Count1 = {count}</h1>
            <h1>Count2 = {count2}</h1>
  <h2>Name : {name}</h2>
  <h3>Location :{location}</h3>
  <h4>Contact:{contact}</h4>
        </div>
    );
};

export default Profile;