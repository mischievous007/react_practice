import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelQuantity(e) {
    // console.log(e.target.value);
    setQuantity(Number(e.target.value));
  }

  function handelSetDec(e) {
    // console.log(e.target);
    setDescription(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();

    if (!description) return alert("Please enter a Item before adding");

    // console.log(e);
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    // const newItem = {
    //   id: new Date(),
    //   description: description,
    //   quantity: quantity,
    //   packed: false,
    // }; THIS ALSO WORKS
    // console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handelQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="List..."
        value={description}
        onChange={handelSetDec}
      />
      <button type="submit">Add</button>
    </form>
  );
}
