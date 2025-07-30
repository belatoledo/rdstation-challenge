import React from "react";

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
