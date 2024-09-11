import React, { useState } from "react";
import LoginPage from "../Loginpage";
import CreateJobProfile from "./CreateJobProfile";

const AdminLogin = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [createJP, setCreateJP] = useState(false);

  function handleUser() {
    setShowLoginPage(true);
  }

  return (
    <div>
      {!showLoginPage ? (
        <button onClick={handleUser}>User</button>
      ) : (
        <LoginPage />
      )}
      {!createJP && (
        <button onClick={() => setCreateJP(true)}>Create Job Profile</button>
      )}
      {createJP && <CreateJobProfile />}
    </div>
  );
};

export default AdminLogin;

// const initialState = {
//     username: "",
//     password: "",
//   };
//   const initilaErrors = {
//     username: false,
//     password: false,
//   };
//   const [adminform, setAdminform] = useState(initialState);
//   const [error, setError] = useState(initilaErrors);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdminform({ ...adminform, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(adminform);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Textfield
//           type="text"
//           name="username"
//           label="Username"
//           placeholder="Enter the username"
//           value={adminform.username}
//           onChange={handleChange}
//           error={error.username}
//         ></Textfield>
//         <Textfield
//           type="text"
//           name="password"
//           label="Password"
//           placeholder="Enter the password"
//           value={adminform.password}
//           onChange={handleChange}
//           error={error.password}
//         ></Textfield>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
