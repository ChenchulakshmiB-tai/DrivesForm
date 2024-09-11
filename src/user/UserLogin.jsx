import React from "react";
import { useSelector } from "react-redux";

function UserLogin() {
  const { data } = useSelector((state) => state.createjob);
  console.log(data);
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>JOBID</th>
            <th>Company Name</th>
            <th>Title</th>
            <th>Role</th>
            <th>Location</th>
            <th>Package</th>
            <th>Gender Prefernce</th>
            <th>Qualification</th>
            <th>Branch</th>
            <th>YearOf Pass</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            <tr key={index}>
              <td>{value.jobid}</td>
              <td>{value.companyname}</td>
              <td>{value.jobtitle}</td>
              <td>{value.jobrole}</td>
              <td>{value.joblocation}</td>
              <td>{value.package}</td>
              <td>{value.preference}</td>
              <td>{value.qualification}</td>
              <td>{value.branch}</td>
              <td>{value.yearofpass}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserLogin;

// import React from "react";
// import Textfield from "../components/TextField";
// import { useState } from "react";

// function UserLogin() {
//   const initialState = {
//     username: "",
//     password: "",
//   };
//   const initilaErrors = {
//     username: false,
//     password: false,
//   };
//   const [userform, setUserform] = useState(initialState);
//   const [error, setError] = useState(initilaErrors);
//   const [userList, setUserlist] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setError(initilaErrors);
//     setUserform({ ...userform, [name]: value });
//     const usernameregx = /^[a-zA-Z0-9.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z-]{2,4}$/;
//     const passwordregx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//     if (
//       !usernameregx.test(userform.username) ||
//       userform.username.trim() === ""
//     ) {
//       setError({ ...error, username: true });
//     }
//     if (
//       !passwordregx.test(userform.password) ||
//       userform.password.trim() === ""
//     ) {
//       setError({ ...error, password: true });
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!Object.values(error).includes(true)) {
//       setUserlist((prev) => [...prev, userform]);

//       setUserform(initialState);
//     }
//   };
//   console.log(userList);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Textfield
//           type="text"
//           name="username"
//           label="Username"
//           placeholder="Enter the username"
//           value={userform.username}
//           onChange={handleChange}
//           error={error.username}
//         ></Textfield>
//         <Textfield
//           type="text"
//           name="password"
//           label="Password"
//           placeholder="Enter the password"
//           value={userform.password}
//           onChange={handleChange}
//           error={error.password}
//         ></Textfield>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UserLogin;
