import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from "mathjs";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  //taking everything in the text and (take the prev and + with value)
  const addText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const calculateResult = () => {
    const input = text.join(""); //remove commas
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Calculator</h1>

      <div className="App">
        <div className="calc-wrapper">
          <Input text={text} result={result} />
          <div className="row">
            <Button symbol="7" handleClick={addText} />
            <Button symbol="8" handleClick={addText} />
            <Button symbol="9" handleClick={addText} />
            <Button symbol="/" color={buttonColor} handleClick={addText} />
          </div>
          <div className="row">
            <Button symbol="4" handleClick={addText} />
            <Button symbol="5" handleClick={addText} />
            <Button symbol="6" handleClick={addText} />
            <Button symbol="*" color={buttonColor} handleClick={addText} />
          </div>
          <div className="row">
            <Button symbol="1" handleClick={addText} />
            <Button symbol="2" handleClick={addText} />
            <Button symbol="3" handleClick={addText} />
            <Button symbol="+" color={buttonColor} handleClick={addText} />
          </div>
          <div className="row">
            <Button symbol="0" handleClick={addText} />
            <Button symbol="." handleClick={addText} />
            <Button symbol="=" handleClick={calculateResult} />
            <Button symbol="-" color={buttonColor} handleClick={addText} />
          </div>
          <Button symbol="clear" color="red" handleClick={resetInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
