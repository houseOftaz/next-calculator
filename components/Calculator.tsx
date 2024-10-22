"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");

  const handleNumberClick = (num: string) => {
    setDisplay((prev) => (prev === "0" ? num : prev + num));
  };

  const handleOperationClick = (op: string) => {
    setOperation(op);
    setPrevValue(display);
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    const current = parseFloat(display);
    const previous = parseFloat(prevValue);
    let result = 0;

    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperation("");
    setPrevValue("");
  };

  const handleClearClick = () => {
    setDisplay("0");
    setOperation("");
    setPrevValue("");
  };

  return (
    <div className="w-64 mx-auto bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="bg-gray-200 p-2 rounded mb-4 text-right text-2xl font-bold">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/"].map((btn) => (
          <Button
            key={btn}
            onClick={() =>
              isNaN(parseInt(btn))
                ? handleOperationClick(btn)
                : handleNumberClick(btn)
            }
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            {btn}
          </Button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <Button
            key={btn}
            onClick={() =>
              isNaN(parseInt(btn))
                ? handleOperationClick(btn)
                : handleNumberClick(btn)
            }
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            {btn}
          </Button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <Button
            key={btn}
            onClick={() =>
              isNaN(parseInt(btn))
                ? handleOperationClick(btn)
                : handleNumberClick(btn)
            }
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            {btn}
          </Button>
        ))}
        <Button
          onClick={() => handleNumberClick("0")}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          0
        </Button>
        <Button
          onClick={() => handleNumberClick(".")}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          .
        </Button>
        <Button
          onClick={handleEqualsClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          =
        </Button>
        <Button
          onClick={() => handleOperationClick("+")}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          +
        </Button>
        <Button
          onClick={handleClearClick}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded col-span-4"
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
