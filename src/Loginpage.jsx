import React from "react";
import Textfield from "./components/TextField.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "./slices/loginSlice.js";

function LoginPage() {
  const initialState = {
    username: "",
    password: "",
  };
  const initilaErrors = {
    username: false,
    password: false,
  };
  const [userform, setUserform] = useState(initialState);
  const [error, setError] = useState(initilaErrors);
  const [userList, setUserlist] = useState([]);
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userType } = useSelector((state) => state.validate);

  useEffect(() => {
    if (userType === "admin") {
      console.log("adminnn");
      setShow(false);
      navigate("/admin");
    } else if (userType === "user") {
      console.log("userrrr");
      navigate("/user");
      setShow(false);
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(initilaErrors);
    setUserform({ ...userform, [name]: value });
    const usernameregx = /^[a-zA-Z0-9.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z-]{2,4}$/;
    const passwordregx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (
      !usernameregx.test(userform.username) ||
      userform.username.trim() === ""
    ) {
      setError({ ...error, username: true });
    }
    if (
      !passwordregx.test(userform.password) ||
      userform.password.trim() === ""
    ) {
      setError({ ...error, password: true });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginRequest(userform));
    setUserform(initialState);
    console.log("fomsubmietd", userform);
  };
  console.log(userList);
  return (
    <div>
      {show && (
        <form onSubmit={handleSubmit}>
          <Textfield
            type="text"
            name="username"
            label="Username"
            placeholder="Enter the username"
            value={userform.username}
            onChange={handleChange}
            error={error.username}
          ></Textfield>
          <Textfield
            type="text"
            name="password"
            label="Password"
            placeholder="Enter the password"
            value={userform.password}
            onChange={handleChange}
            error={error.password}
          ></Textfield>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
