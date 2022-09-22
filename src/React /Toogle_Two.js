import React, { useState } from "react";

const oldUser = {
  name: "Manpreet Kaur",
  school: "AMI Shishu Mandir",
  age: "21",
  hobby: "Badminton"
};

const newUser = {
  name: " Aayushmaan Verma",
  school: " Miss hill",
  age: " 26",
  hobby: " Fighting"
};

const Toogle_Two = () => {
  const [user, setUser] = useState(oldUser);
  const [showProfile, setShowProfile] = useState(0);

  const toggle = () => {
    setUser(showProfile ? oldUser : newUser);
    setShowProfile(!showProfile);
  };

 

  return (
    <div>
      
      <p> Name: {user.name}</p>
      <p> School:{user.school}</p>
      <p> Age:{user.age}</p>
      <p> Hobby:{user.hobby}</p>
      <button onClick={toggle}>Click Me</button>
    </div>
  );
};

export default Toogle_Two;