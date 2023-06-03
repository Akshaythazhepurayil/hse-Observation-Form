import React, { useState } from 'react';
import './GridSection.css';

const GridSection = () => {
  const [formData, setFormData] = useState({
    body: [
      {
        Observation: '',
        RiskLevel: '',
        ActionReq: '',
        ActionBy: '',
        TargetDate: '',
        Images: '',
      },
    ],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedBody = [...formData.body];
    updatedBody[index][name] = value;

    setFormData({
      ...formData,
      body: updatedBody,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData.body);
  };

  const addRow = () => {
    setFormData({
      ...formData,
      body: [
        ...formData.body,
        {
          Observation: '',
          RiskLevel: '',
          ActionReq: '',
          ActionBy: '',
          TargetDate: '',
          Images: '',
        },
      ],
    });
  };

  const removeRow = (index) => {
    const updatedBody = [...formData.body];
    updatedBody.splice(index, 1);

    setFormData({
      ...formData,
      body: updatedBody,
    });
  };

  return (
    <div className="form-table-container">
      <form className="form-table" onSubmit={handleSubmit}>
        <table>
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
            {formData.body.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    className='input'
                    type="text"
                    name="Observation"
                    value={row.Observation}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </td>
                <td>
                  <input
                    className='input'
                    type="text"
                    name="RiskLevel"
                    value={row.RiskLevel}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </td>
                <td>
                  <input
                    className='input'
                    type="text"
                    name="ActionReq"
                    value={row.ActionReq}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </td>
                <td>
                  <input
                    className='input'
                    type="text"
                    name="ActionBy"
                    value={row.ActionBy}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </td>
                <td>
                  <input
                    className='input'
                    type="date"
                    name="TargetDate"
                    value={row.TargetDate}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </td>
                <td>
                  <input
                    className='input'
                    type="file"
                    name="Images"
                    value={row.Images}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    className='input'
                    type="text"
                    name="Actions"
                    value={row.Actions}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td>
                  <button className='addBtn' type="button" onClick={addRow}>
                    Add Row
                  </button>
                  {index > 0 && (
                    <button className='removeBtn' type="button" onClick={() => removeRow(index)}>
                      Remove Row
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default GridSection;
