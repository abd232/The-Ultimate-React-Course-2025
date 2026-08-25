import react from "react";
import SideBar from "./components/side-bar";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [friends, setFriends] = react.useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = react.useState(null);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleSelectFriend(selectedFriend) {
    setSelectedFriend(selectedFriend);
  }

  function handleSplitBill(friendBalanceDelta) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + friendBalanceDelta }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <SideBar
        initialFriends={friends}
        onAddFriend={handleAddFriend}
        onSelectFriend={handleSelectFriend}
        selectedFriend={selectedFriend}
      />
      <SplitBillForm
        selectedFriend={selectedFriend}
        onSplitBill={handleSplitBill}
      />
    </div>
  );
}
