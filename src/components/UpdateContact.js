import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    let result = await fetch(`https://contact-management-app-t7pl.onrender.com/data/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPhone(result.phone);
    setEmail(result.email);
    setCity(result.city);
    setState(result.state);
  };

  const UpdateContact = async () => {
    let result = await fetch(`https://contact-management-app-t7pl.onrender.com/data/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, phone, email, city, state }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    navigate("/");
  };
  return (
    <div>
      <div>
        <div>
          <div className="w-full h-full flex flex-col items-center pt-10">
            <div className="font-bold text-3xl p-2 xxs:text-2xl">Update Contact</div>
            <div className=" w-full flex flex-col items-center mt-8">
              <input
                type="text"
                placeholder="enter your name"
                className=" w-1/3 xxs:w-2/3 p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className=" w-1/3 xxs:w-2/3 p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="enter your phone"
                className=" w-1/3 xxs:w-2/3 p-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="enter your state"
                className=" w-1/3 xxs:w-2/3 p-2"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="enter your city"
                className=" w-1/3 xxs:w-2/3 p-2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <br />
              <div className="w-full flex justify-center">
                <button
                  onClick={UpdateContact}
                  className="bg-blue-700 xxs:w-2/3 font-semibold text-white w-1/3 p-2 hover:bg-blue-800"
                >
                  Update Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContact;
