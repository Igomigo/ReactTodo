import { useEffect, useRef, useState } from "react";

function Form(props) {
    // Contains the form data

    const [name, setName] = useState("");
    const editInput = useRef(null);

    function HandleSubmit(e) {
        e.preventDefault();
        if (name !== "") {
            props.onAddTask(name);
            setName("");
        }
    }

    function HandleChange(e) {
        setName(e.target.value);
    }

    //useEffect(() => {
      //editInput.current.focus();
    //}, []);

    return (
        <form onSubmit={HandleSubmit}>
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
          value={name}
          onChange={HandleChange}
          ref={editInput}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}

export default Form;