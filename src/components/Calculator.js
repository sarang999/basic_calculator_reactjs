import React, { useState } from "react";
import "./Calculator.css";

export const Calculator = () => {
  const [result, setResult] = useState("");

  //   taking inputs
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  //   clearing result
  const clear = () => {
    setResult("");
  };

  //   backSpace fn
  const backSpace = () => {
    setResult(result.slice(0, -1)); //or result.length-1 === -1
  };

  //   evaluation of data
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("ERROR");
    }
  };

  return (
    <div id="container">
      <form id="res">
        <input type="text" readOnly value={result} />
      </form>

      <div className="keypad">
        <button className="clear" onClick={clear} id="clear">
          clear
        </button>
        <button onClick={backSpace} id="backSpace">
          C
        </button>
        <button onClick={handleClick} name="/">
          &divide;
        </button>
        <button onClick={handleClick} name="7">
          7
        </button>
        <button onClick={handleClick} name="8">
          8
        </button>
        <button onClick={handleClick} name="9">
          9
        </button>
        <button onClick={handleClick} name="*">
          &times;
        </button>
        <button onClick={handleClick} name="4">
          4
        </button>
        <button onClick={handleClick} name="5">
          5
        </button>
        <button onClick={handleClick} name="6">
          6
        </button>
        <button onClick={handleClick} name="-">
          &ndash;
        </button>
        <button onClick={handleClick} name="1">
          1
        </button>
        <button onClick={handleClick} name="2">
          2
        </button>
        <button onClick={handleClick} name="3">
          3
        </button>
        <button onClick={handleClick} name="+">
          +
        </button>
        <button onClick={handleClick} name="0">
          0
        </button>
        <button onClick={handleClick} name=".">
          .
        </button>
        <button className="equal" onClick={calculate} id="result">
          =
        </button>
      </div>
    </div>
  );
};
