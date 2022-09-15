import "./App.css";
import Button from "./components/button/Button";
import Label from "./components/Label";

function App() {
  return (
    <div>
      <div className="abc">
        <Label labelPlaceholder="Enter your Name" />
        <Button buttonName="OK" />
      </div>
    </div>
  );
}

export default App;
