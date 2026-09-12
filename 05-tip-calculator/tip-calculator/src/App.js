import "./App.css";
import { useState } from "react";
function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [yourTipPercentage, setYourTipPercentage] = useState(0);
  const [friendsTipPercentage, setFriendsTipPercentage] = useState(0);

  return (
    <div>
      <BillCost billAmount={billAmount} onSetBillAmount={setBillAmount} />
      <HowDoYouLikeService
        yourTipPercentage={yourTipPercentage}
        onSetYourTipPercentage={setYourTipPercentage}
      />
      <HowDoYourFriendsLikeService
        friendsTipPercentage={friendsTipPercentage}
        onSetFriendsTipPercentage={setFriendsTipPercentage}
      />
      <CalculateBill
        billAmount={billAmount}
        yourTipPercentage={yourTipPercentage}
        friendsTipPercentage={friendsTipPercentage}
      />
      <button
        onClick={() => {
          setBillAmount(0);
          setYourTipPercentage(0);
          setFriendsTipPercentage(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

function BillCost({ billAmount, onSetBillAmount }) {
  return (
    <div>
      <label htmlFor="bill">Enter the bill amount:</label>
      <input
        type="number"
        id="bill"
        value={billAmount}
        onChange={(e) => onSetBillAmount(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}

function HowDoYouLikeService({ yourTipPercentage, onSetYourTipPercentage }) {
  return (
    <div>
      <label htmlFor="tip">How do you like the service?</label>
      <select
        id="tip"
        value={yourTipPercentage}
        onChange={(e) => onSetYourTipPercentage(parseInt(e.target.value) || 0)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function HowDoYourFriendsLikeService({
  friendsTipPercentage,
  onSetFriendsTipPercentage,
}) {
  return (
    <div>
      <label htmlFor="tip">How do your friends like the service?</label>
      <select
        id="tip"
        value={friendsTipPercentage}
        onChange={(e) =>
          onSetFriendsTipPercentage(parseInt(e.target.value) || 0)
        }
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function CalculateBill({
  billAmount,
  yourTipPercentage,
  friendsTipPercentage,
}) {
  const tipAmount =
    ((yourTipPercentage + friendsTipPercentage) * billAmount) / 200;
  const totalBill = billAmount + tipAmount;
  return (
    <h1>
      Total Bill is ${totalBill.toFixed(2)} (${billAmount} + $
      {tipAmount.toFixed(2)})
    </h1>
  );
}

export default App;
