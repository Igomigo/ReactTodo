import React, { useState } from "react";

export default function Form({ updateFData }) {
    const [inputData, setInputData] = useState("");

    function submit(e) {
        e.preventDefault();
        updateFData(inputData);
    }

    function InputChange(e) {
        setInputData(e.target.value);
    }

    return (
        <form onSubmit={submit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={InputChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}