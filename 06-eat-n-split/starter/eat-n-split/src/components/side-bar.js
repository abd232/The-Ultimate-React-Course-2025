import react from "react";

export default function SideBar({
  initialFriends,
  onAddFriend,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <FriendList
      initialFriends={initialFriends}
      onAddFriend={onAddFriend}
      onSelectFriend={onSelectFriend}
      selectedFriend={selectedFriend}
    />
  );
}

function FriendList({
  initialFriends,
  onAddFriend,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <div className="sidebar">
      <ul className="">
        <h3>Friend List</h3>
        {initialFriends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 ? (
              <p className="red">
                You owe {friend.name} {Math.abs(friend.balance)}$
              </p>
            ) : friend.balance > 0 ? (
              <p className="green">
                {friend.name} owes you {Math.abs(friend.balance)}$
              </p>
            ) : (
              <p>You and {friend.name} are even</p>
            )}
            {selectedFriend?.id === friend.id ? (
              <button className="button" onClick={() => onSelectFriend(null)}>
                Close
              </button>
            ) : (
              <button className="button" onClick={() => onSelectFriend(friend)}>
                Select
              </button>
            )}
          </li>
        ))}
      </ul>
      <AddFriendForm onAddFriend={onAddFriend} />
    </div>
  );
}

function AddFriendForm({ onAddFriend }) {
  const [open, setOpen] = react.useState(false);
  const [name, setName] = react.useState("");
  const [image, setImage] = react.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = { id, name, image, balance: 0 };
    onAddFriend(newFriend);
    setName("");
    setImage("");
    setOpen(false);
  }

  return (
    <>
      {open && (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label htmlFor="name">Friend Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="image">🖼Image URL</label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="button">Add</button>
        </form>
      )}
      <button className="button" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Add Friend"}
      </button>
    </>
  );
}
