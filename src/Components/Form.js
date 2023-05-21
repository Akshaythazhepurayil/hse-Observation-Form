import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Table from "./Table";

function Form() {
  const url = "http://localhost:3306/api/MainMenu/formdb";
  const [formData, setFormData] = useState({
    iTransId: 0,
    DocDate: "",
    Project: 0,
    ProjectDes: "",
    Location: "",
    UserId: 0,
    Signature: "",
    Body: [
      {
        Observation: "",
        RiskLevel: 0,
        ActionReq: "",
        ActionBy: 0,
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
    axios.post(url, formData)
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
        <form onSubmit={handleSubmit}>
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
          {formData.Body.map((observation, index) => (
            <div style={{ gap: "5px" }} key={index} className="observation">
              <h3>Grid Section</h3>
              <input
                onChange={(event) => handleInputChange(event, index)}
                type="text"
                name="Observation"
                placeholder="Observation/Findings"
                value={observation.Observation}
              />
              <input
                onChange={(event) => handleInputChange(event, index)}
                type="number"
                name="RiskLevel"
                placeholder="RiskLevel"
                value={observation.RiskLevel}
              />
              <input
                onChange={(event) => handleInputChange(event, index)}
                type="text"
                name="ActionReq"
                placeholder="ActionReq"
                value={observation.ActionReq}
              />
              <input
                onChange={(event) => handleInputChange(event, index)}
                type="number"
                name="ActionBy"
                placeholder="ActionBy"
                value={observation.ActionBy}
              />
              <input
                onChange={(event) => handleInputChange(event, index)}
                type="date"
                name="TargetDate"
                value={observation.TargetDate}
              />
              <input
                onChange={(event) => handleInputChange(event, index)}
                type="text"
                name="Images"
                placeholder="Images"
                value={observation.Images}
              />
            </div>
          ))}
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Table data={formData} />
    </>
  );
}

export default Form;
