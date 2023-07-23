import React from "react";

function Test() {
  return (
    <div>
      <button onClick={() => alert(localStorage.getItem("loglevel"))}>
        click it
      </button>
    </div>
  );
}

export default Test;
