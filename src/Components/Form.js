import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Table from "./Table";

function Form() {
  // const url = "http://localhost:3306/api/MainMenu/formdb";
  const [rowCount, setRowCount] = useState(1);
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
      .post("http://103.120.178.195/Sang.Ray.Mob.Api/Ray/PostHSE", formData)
      .then((response) => {
        console.log("Data saved successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  const handleRemoveData = (index) => {
    const updatedFormData = { ...formData };
    updatedFormData.Body.splice(index, 1);
    setRowCount(rowCount - 1);
    setFormData(updatedFormData);
  };

  const handleAddRow = () => {
    const updatedFormData = { ...formData };
    updatedFormData.Body.push({
      Observation: "",
      RiskLevel: "",
      ActionReq: "",
      ActionBy: "",
      TargetDate: "",
      Images: "",
    });
    setRowCount(rowCount + 1);
    setFormData(updatedFormData);
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

          <h2>Grid Section</h2>
          <div className="form-table-container">
            <table className="form-table">
              <thead>
                <tr>
                  <th>Observation</th>
                  <th>Risk Level</th>
                  <th>Action Required</th>
                  <th>Action By</th>
                  <th>Target Date</th>
                  <th>Images</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {formData.Body.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className="input"
                        type="text"
                        name="Observation"
                        value={row.Observation}
                        onChange={(e) => handleInputChange(e, index)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        name="RiskLevel"
                        value={row.RiskLevel}
                        onChange={(e) => handleInputChange(e, index)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        name="ActionReq"
                        value={row.ActionReq}
                        onChange={(e) => handleInputChange(e, index)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        name="ActionBy"
                        value={row.ActionBy}
                        onChange={(e) => handleInputChange(e, index)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="date"
                        name="TargetDate"
                        value={row.TargetDate}
                        onChange={(e) => handleInputChange(e, index)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="file"
                        name="Images"
                        value={row.Images}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        name="ActionBy"
                        value={row.ActionBy}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <button
                        className="addBtn"
                        type="button"
                        onClick={handleAddRow}
                      >
                        Add Row
                      </button>
                      {index > 0 && (
                        <button
                          className="removeBtn"
                          type="button"
                          onClick={() => handleRemoveData(index)}
                        >
                          Remove Row
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="submitBtn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Table data={formData} />
    </>
  );
}

export default Form;
