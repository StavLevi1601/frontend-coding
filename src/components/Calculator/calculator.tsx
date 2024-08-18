import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator(): JSX.Element {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const numbersAndDigits = [
    { id: "/", value: "/" },
    { id: "*", value: "*" },
    { id: "7", value: "7" },
    { id: "8", value: "8" },
    { id: "9", value: "9" },
    { id: "-", value: "-" },
    { id: "4", value: "4" },
    { id: "5", value: "5" },
    { id: "6", value: "6" },
    { id: "+", value: "+" },
    { id: "1", value: "1" },
    { id: "2", value: "2" },
    { id: "3", value: "3" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent;

    if (value) {
      setInput((prevInput) => {
        return prevInput + value;
      });
    } else {
      console.error("No value found for button click");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  const handleClear = () => {
    setInput("");
    if (error) {
      setError("");
    }
  };

  const validateInput = (expr: string) => {
    const validPattern = /^[\d\s\+\-\*\/\(\)\.]+$/;
    const invalidPattern = /[^\d\)]\s*[+\-*/]{2,}|\.\d*\./;

    if (!validPattern.test(expr) || invalidPattern.test(expr)) {
      setInput("Error");

      return false;
    }
    return true;
  };

  const handleResult = () => {
    if (validateInput(input)) {
      try {
        const result = safeEval(input);
        console.log(result);
        if (result === Infinity) {
          setError("Division by zero");
          setInput("");
          return;
        }
        setInput(result.toString());
      } catch (error) {
        setError("Malformed expression");
      }
    }
  };

  const safeEval = (expr: string) => {
    return evaluate(expr);
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingLeft: "500px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px",
          direction: "revert",
        }}
      >
        <input
          type="text"
          value={input || error}
          onChange={handleChange}
          style={{
            gridColumn: "span 4",
            border: "1px solid black",
            borderColor: "transparent",
          }}
        />
        <button
          style={{
            gridColumn: "span 2",
          }}
          onClick={handleClear}
        >
          AC
        </button>
        {numbersAndDigits.map((item) => (
          <button key={item.id} onClick={handleClick}>
            {item.id}
          </button>
        ))}
        <button
          style={{
            gridRow: "span 2",
          }}
          onClick={handleResult}
        >
          =
        </button>
        <button
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
          }}
          onClick={handleClick}
        >
          0
        </button>
        <button onClick={handleClick}>.</button>
      </div>
    </div>
  );
}
