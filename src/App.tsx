/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import "./App.css";
import { Field } from "./components/Field";

function App() {
  const [value, setValue] = useState(4);

  const handleSelect = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      <select
        css={css`
          margin-bottom: 100px;
          width: 100px;
          height: 30px;
          border: none;
          background-color: lightpink;
          border-radius: 10px;
          text-align: center;
        `}
        defaultValue={4}
        onChange={handleSelect}
      >
        <option selected value={4}>
          4
        </option>
        <option value={8}>8</option>
        <option value={12}>12</option>
        <option value={16}>16</option>
      </select>
      <Field matrixSize={value} />
    </div>
  );
}

export default App;
