import { useState } from "react";

export default function NewDetail({ onAdd }) {
  const [enteredDetail, setEnteredDetail] = useState("");

  function handleChange(e) {
    setEnteredDetail(e.target.value);
  }

  function handleClick() {
    if (enteredDetail.trim() === "") {
      return;
    }
    onAdd(enteredDetail);
    setEnteredDetail("");
  }

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredDetail}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Detail
      </button>
    </div>
  );
}
