import "./App.css";
import HSEObservationForm from "./Pages/HSEObservationForm";

function App() {
  return (
    <div className="App">
      <div className="formHeader">
        <h2>Form</h2>
      </div>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <HSEObservationForm />
      </div>
    </div>
  );
}

export default App;
