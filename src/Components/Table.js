import React from "react";
import "./Table.css";

function Table(formData) {
  return (
    <div className="table">
      <h3>General Condition</h3>
      <table>
        <tbody>
          <tr>
            <th>Action</th>
            <th>SL NO</th>
            <th>Observation/ Findings</th>
            <th>Risk Level</th>
          </tr>
          {formData.Body && formData.Body.length > 0 ? (
            <tr>
              <td>{formData.Signature}</td>
              <td>{formData.iTransId}</td>
              <td>{formData.Body[0].Observation}</td>
              <td>{formData.Body[0].RiskLevel}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
