import { useState } from "react";
export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendExpense = bill ? bill - yourExpense : "";
  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    const friendBalanceDelta =
      whoIsPaying === "user" ? friendExpense : -yourExpense;
    onSplitBill(friendBalanceDelta);
    setBill("");
    setYourExpense("");
    setWhoIsPaying("user");
  }
  return (
    selectedFriend && (
      <form className="form-split-bill" onSubmit={handleSplitBill}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label htmlFor="bill">💰Bill Value</label>
        <input
          id="bill"
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <label htmlFor="your-expense">🧍‍♂️Your Expense</label>
        <input
          id="your-expense"
          type="number"
          value={yourExpense}
          onChange={(e) => setYourExpense(Number(e.target.value))}
        />
        <label htmlFor="friend-expense">
          🧍‍♀️{selectedFriend.name}'s Expense
        </label>
        <input
          id="friend-expense"
          type="number"
          value={friendExpense}
          disabled
        />
        <label htmlFor="who-is-paying">💸Who is paying the bill</label>
        <select
          id="who-is-paying"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <button className="button">Split Bill</button>
      </form>
    )
  );
}
