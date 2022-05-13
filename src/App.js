import "./styles.css";
import { add, multiply, divide, substract } from "./calculator.js";
const n1 = 20;
const n2 = 10;

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>practise for import and export</h1>
      <ul>
        <li>{add(n1, n2)}</li>
        <li>{divide(n1, n2)}</li>
        <li>{multiply(n1, n2)}</li>
        <li>{substract(n1, n2)}</li>
      </ul>
    </div>
  );
}
