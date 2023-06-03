import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Table from "./Table";
import GridSection from "./GridSection";

function Form() {
  const [show, setShow] = useState(false);
  const url = "http://localhost:3306/api/MainMenu/formdb";
  const [formData, setFormData] = useState({
    iTransId: "",
    DocDate: "",
    Project: "",
    ProjectDes: "",
    Location: "",
    UserId: "",
    Signature: "",
    Body: [
      {
        Observation: "",
        RiskLevel: "",
        ActionReq: "",
        ActionBy: "",
        TargetDate: "",
        Images: "",
      },
    ],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
    if (index !== undefined) {
      updatedFormData.Body[index][name] = value;
    } else {
      updatedFormData[name] = value;
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, formData)
      .then((response) => {
        console.log("Data saved successfully:");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <>
      <div>
        <form 
        onSubmit={(e)=> {e.preventDefault();
          handleSubmit(e);
          setShow(true);
          }}>
          <input
            onChange={handleInputChange}
            type="number"
            name="iTransId"
            placeholder="iTransId"
            value={formData.iTransId}
          />
          <input
            onChange={handleInputChange}
            type="date"
            name="DocDate"
            value={formData.DocDate}
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="Project"
            placeholder="Project"
            value={formData.Project}
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="ProjectDes"
            placeholder="Project Details"
            value={formData.ProjectDes}
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="Location"
            placeholder="Location"
            value={formData.Location}
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="UserId"
            placeholder="UserId"
            value={formData.UserId}
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="Signature"
            placeholder="Signature"
            value={formData.Signature}
          />
          <button className="submitBtn" 
          type="submit" 
          >
            Submit
          </button>
        </form>
        {show && (
        <div>
           <GridSection formData={formData} handleChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
          )}
      </div>
      <Table data={formData} />
    </>
  );
}

export default Form;
