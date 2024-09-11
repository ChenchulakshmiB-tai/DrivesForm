import Textfield from "../components/TextField";
import React, { useState } from "react";
import "./createjobp.css";
import { useDispatch, useSelector } from "react-redux";
import { addtoJobsList } from "../slices/createJobSlice";

const CreateJobProfile = () => {
  const intialvalue = {
    jobid: "",
    companyname: "",
    jobtitle: "",
    jobrole: "",
    joblocation: "",
    package: "",
    preference: "",
    qualification: "",
    branch: "",
    yearofpass: "",
    skills: "",
    backlogs: "",
    sslc: "",
    puc: "",
    graduate: "",
    gap: "",
    positions: "",
    mode: "",
    agreement: "",
    deposit: "",
    relocation: "",
    cerficate: "",
    shifts: "",
    blocking: "",
    firstround: "",
    expires: "",
    minemp: "",
    itype: "",
  };
  const error = {
    jobid: false,
    companyname: false,
    jobtitle: false,
    jobrole: false,
    joblocation: false,
    package: false,
    preference: false,
    qualification: false,
    branch: false,
    yearofpass: false,
    backlogs: false,
    sslc: false,
    puc: false,
    graduate: false,
    gap: false,
    mode: false,
    skills: false,
    firstround: false,
    expires: false,
  };
  const [jobPr, setJobPr] = useState(intialvalue);
  const [errors, setErrors] = useState(error);
  const dispatch = useDispatch();
  function handleChange(e) {
    const { name, value } = e.target;
    setJobPr({ ...jobPr, [name]: value });
  }
  const { data } = useSelector((state) => state.createjob);
  console.log("data", data);

  const handleSubmit = (e) => {
    setErrors(error);
    e.preventDefault();

    let newError = {};

    Object.keys(errors).forEach((key) => {
      if (jobPr[key].trim() === "") {
        newError[key] = true;
      } else {
        newError[key] = false;
      }
    });

    setErrors(newError);
    console.log(errors);

    const hasError = Object.values(newError).some((value) => value === true);

    if (!hasError) {
      console.log("Form submitted successfully");
      console.log(jobPr);
      dispatch(addtoJobsList(jobPr));
      setJobPr(intialvalue);
    } else {
      console.log("Form has errors");
      console.log(jobPr);
    }
  };
  return (
    <div>
      <div>JobProfile</div>

      <form onSubmit={handleSubmit}>
        <h2>Company Details</h2>
        <div className="first">
          <div className="firs">
            <Textfield
              type="number"
              label="Job Id*"
              name="jobid"
              placeholder="Enter the Job Id"
              value={jobPr.jobid}
              onChange={handleChange}
              error={errors.jobid}
            ></Textfield>
          </div>
          <div className="firs">
            <Textfield
              type="text"
              label="Company Name*"
              name="companyname"
              placeholder="Enter the Job Id"
              value={jobPr.companyname}
              onChange={handleChange}
              error={errors.companyname}
            ></Textfield>
          </div>
        </div>
        <h2>JOB Details</h2>
        <div className="second">
          <div className="secs">
            <Textfield
              type="text"
              label="Job Title*"
              name="jobtitle"
              placeholder="Enter the Job title"
              value={jobPr.jobtitle}
              onChange={handleChange}
              error={errors.jobtitle}
            ></Textfield>
          </div>
          <div className="secs">
            <Textfield
              type="text"
              label="Job Role*"
              name="jobrole"
              placeholder="Enter the Job role"
              value={jobPr.jobrole}
              onChange={handleChange}
              error={errors.jobrole}
            ></Textfield>
          </div>
          <div className="secs">
            <Textfield
              type="text"
              label="Job Location*"
              name="joblocation"
              placeholder="Enter the Job Location"
              value={jobPr.joblocation}
              onChange={handleChange}
              error={errors.joblocation}
            ></Textfield>
          </div>
          <div className="secs">
            <Textfield
              type="number"
              label="Package(CTC)*"
              name="package"
              step="any"
              placeholder="Enter the package"
              value={jobPr.package}
              onChange={handleChange}
              error={errors.package}
            ></Textfield>
          </div>
          <div className="secs">
            <Textfield
              type="text"
              label="Skills*"
              name="skills"
              placeholder="Enter the skills"
              value={jobPr.skills}
              onChange={handleChange}
              error={errors.skills}
            ></Textfield>
          </div>
        </div>
        <h3>Job Criteria Details</h3>
        <div className="third">
          <div className="three">
            <Textfield
              type="text"
              label="Job Preference*"
              name="preference"
              placeholder="Enter the Job Prefernce"
              value={jobPr.preference}
              onChange={handleChange}
              error={errors.preference}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="text"
              label="Qualification*"
              name="qualification"
              placeholder="Enter the qualification"
              value={jobPr.qualification}
              onChange={handleChange}
              error={errors.qualification}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="text"
              label="Stream/Branch*"
              name="branch"
              placeholder="Enter the Stream/Branch"
              value={jobPr.branch}
              onChange={handleChange}
              error={errors.branch}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="number"
              label="Year of Passing*"
              name="yearofpass"
              placeholder="Enter the Year of passing"
              value={jobPr.yearofpass}
              onChange={handleChange}
              error={errors.yearofpass}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="text"
              label="Backlogs Allowed*"
              name="backlogs"
              placeholder="Enter the backlogs allowed or not"
              value={jobPr.backlogs}
              onChange={handleChange}
              error={errors.backlogs}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="number"
              label="SSLC Min Percentage*"
              name="sslc"
              step="any"
              placeholder="Enter the SSLC Min Percentage"
              value={jobPr.sslc}
              onChange={handleChange}
              error={errors.sslc}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="number"
              label="PUC/Diploma Min Percentage*"
              name="puc"
              step="any"
              placeholder="Enter the PUC/Diploma Min Percentage"
              value={jobPr.puc}
              onChange={handleChange}
              error={errors.puc}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="number"
              label="Graduate Min Percentage*"
              name="graduate"
              step="any"
              placeholder="Enter the Graduate Min Percentage"
              value={jobPr.graduate}
              onChange={handleChange}
              error={errors.graduate}
            ></Textfield>
          </div>
          <div className="three">
            <Textfield
              type="text"
              label="Gap in education*"
              name="gap"
              placeholder="Enter the Gap in education"
              value={jobPr.gap}
              onChange={handleChange}
              error={errors.gap}
            ></Textfield>
          </div>

          <div className="three">
            <Textfield
              type="number"
              label="No Of Positions"
              name="positions"
              placeholder="Enter the No Of Positions"
              value={jobPr.positions}
              onChange={handleChange}
            ></Textfield>
          </div>
        </div>
        <h3>Interview Details</h3>
        <div className="fourth">
          <div className="four">
            <Textfield
              type="text"
              label="Mode Of Interview*"
              name="mode"
              placeholder="Enter the Mode Of Interview"
              value={jobPr.mode}
              onChange={handleChange}
              error={errors.mode}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="number"
              label="Service Agreement"
              name="agreement"
              placeholder="Enter the Service Agreement"
              value={jobPr.agreement}
              onChange={handleChange}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="text"
              label="Deposit"
              name="deposit"
              placeholder="Enter the Deposit"
              value={jobPr.deposit}
              onChange={handleChange}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="text"
              label="Relocation"
              name="relocation"
              placeholder="Enter the Relocation"
              value={jobPr.relocation}
              onChange={handleChange}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="text"
              label="Certificate Submission"
              name="cerficate"
              placeholder="Enter the Certificate Submission"
              value={jobPr.cerficate}
              onChange={handleChange}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="text"
              label="Shifts"
              name="shifts"
              placeholder="Enter the Shifts"
              value={jobPr.shifts}
              onChange={handleChange}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="text"
              label="Blocking Period"
              name="blocking"
              placeholder="Enter the Blocking Period"
              value={jobPr.blocking}
              onChange={handleChange}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="date"
              label="First round date*"
              name="firstround"
              placeholder="Enter the First round date"
              value={jobPr.firstround}
              onChange={handleChange}
              error={errors.firstround}
            ></Textfield>
          </div>
          <div className="four">
            <Textfield
              type="date"
              label="Expires in*"
              name="expires"
              placeholder="Enter the expires in"
              value={jobPr.expires}
              onChange={handleChange}
              error={errors.expires}
            ></Textfield>
          </div>
        </div>
        <h3>Others</h3>
        <div className="fifth">
          <div className="5">
            <div className="fif">
              <Textfield
                type="number"
                label="Min Employability Score"
                name="minemp"
                placeholder="Enter the Min Employability Score"
                value={jobPr.minemp}
                onChange={handleChange}
              ></Textfield>
            </div>
            <div className="fif"></div>
            <Textfield
              type="text"
              label="Interview Type"
              name="itype"
              placeholder="Enter the Interview Type"
              value={jobPr.itype}
              onChange={handleChange}
            ></Textfield>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <div>{JSON.stringify(data)}</div>
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
              <th>Skills</th>
              <th>Backlogs</th>
              <th>First Round</th>
              <th>expired </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={index}>
                  <div>{value.jobid}</div>
                  <td>{value.companyname}</td>
                  <td>{value.jobtitle}</td>
                  <td>{value.jobrole}</td>
                  <td>{value.joblocation}</td>
                  <td>{value.package}</td>
                  <td>{value.preference}</td>
                  <td>{value.qualification}</td>
                  <td>{value.branch}</td>
                  <td>{value.yearofpass}</td>
                  <td>{value.skills}</td>
                  <td>{value.backlogs}</td>
                  <td>{value.firstround}</td>
                  <td>{value.expires}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateJobProfile;
