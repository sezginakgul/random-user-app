import { useEffect, useState } from "react";
import Email from "../assets/email.svg";
import Location from "../assets/location.svg";
import Phone from "../assets/phone.svg";
import "./UserCard.css";
import axios from "axios";

const UserCard = () => {
  const [user, setUser] = useState("");
  const randomUser = async () => {
    const url = "https://randomuser.me/api/";
    try {
      const { data } = await axios(url);
      console.log(data.results[0]);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    randomUser();
  }, []);
  const { dob, name, email, phone, location, picture } = user;
  return (
    <div>
      <div className="card-container">
        <div className="card name ">
          <img src={picture?.large} alt="img" />
          <p>{`${name?.first} ${name?.last}`}</p>
        </div>
        <div className="card">
          <img src={Email} alt="email" width="50px" />
          <p>{email}</p>
        </div>
        <div className="card">
          <img src={Phone} alt="phone" width="50px" />
          <p>{phone}</p>
        </div>
        <div className="card">
          <img src={Location} alt="location" width="50px" />
          <p>
            {location?.city}-{location?.country}
          </p>
        </div>
        <div className="card">
          <img src="" alt="" />
          <p></p>
        </div>
        <div className="desc">
          <div>Age: {dob?.age}</div>
          <div>
            Register Date: {new Date(dob?.date).toLocaleDateString("tr-TR")}
          </div>
        </div>
      </div>
      <button onClick={() => randomUser()}>Random User</button>
    </div>
  );
};

export default UserCard;
