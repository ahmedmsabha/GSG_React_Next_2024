"use client";

import { useState } from "react";
import Display from "./Display";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [isNewCalculation, setIsNewCalculation] = useState(true);
  const [formalResult, setFormalResult] = useState("0");

  const handleNumber = (num: string) => {
    if (isNewCalculation) {
      setDisplay(num);
      setIsNewCalculation(false);
    } else {
      setDisplay((display) => (display === "0" ? num : display + num));
    }

    if (formalResult != "0") {
      setFormalResult("0");
    }
  };

  const handleOperation = (op: string) => {
    setFirstNumber(display);
    setOperation(op);
    setIsNewCalculation(true);
  };

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);

    let result = 0;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 == 0 ? 0 : num1 / num2;
        break;
    }

    setDisplay(`${result}`);
    setFormalResult(`${firstNumber} ${operation} ${display} = ${result}`);
    setIsNewCalculation(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
        <Display display={formalResult === "0" ? display : formalResult} />
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) =>
            num === 0 ? (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-blue-normal hover:bg-blue-hover text-white text-xl font-bold p-4 rounded-lg  col-start-1 col-end-3"
              >
                {num}
              </button>
            ) : (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-blue-normal hover:bg-blue-hover text-white text-xl font-bold p-4 rounded-lg aspect-square"
              >
                {num}
              </button>
            )
          )}
          <button
            onClick={() => handleOperation("+")}
            className="bg-orange-normal hover:bg-orange-hover text-white text-xl font-bold p-4 rounded-lg aspect-square"
          >
            +
          </button>
          <button
            onClick={() => handleOperation("/")}
            className="bg-orange-normal hover:bg-orange-hover text-white text-xl font-bold p-4 rounded-lg aspect-square"
          >
            /
          </button>
          <button
            onClick={() => handleOperation("*")}
            className="bg-orange-normal hover:bg-orange-hover text-white text-xl font-bold p-4 rounded-lg aspect-square"
          >
            *
          </button>
          <button
            onClick={() => handleOperation("-")}
            className="bg-orange-normal hover:bg-orange-hover text-white text-xl font-bold p-4 rounded-lg aspect-square"
          >
            -
          </button>
          <button
            onClick={calculate}
            className="col-span-3 bg-green-normal hover:bg-green-hover text-white text-xl font-bold p-4 rounded-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
