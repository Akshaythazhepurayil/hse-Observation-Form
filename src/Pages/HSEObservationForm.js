import React from "react";
import Form from "../Components/Form";

function HSEObservationForm() {
  return (
    <div style={{ width: "500px", height: "900px", border: "1px solid gray" }}>
      <div>
        <h1>HSE Observation Form</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Form />
      </div>
    </div>
  );
}

export default HSEObservationForm;
