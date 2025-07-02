import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredText = inputRef.current.value;
    alert(`Entered Text: ${enteredText}`);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Enter text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
