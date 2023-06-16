import { useState } from "react";

const initialItems = [
  { id: 1, emoji: "🧀", name: "Cheese", quantity: 3, bought: false },
  { id: 2, emoji: "🥛", name: "Milk", quantity: 1, bought: false },
  { id: 3, emoji: "🍞", name: "Bread", quantity: 1, bought: false },
  { id: 4, emoji: "☕️", name: "Coffee", quantity: 1, bought: false },
  { id: 5, emoji: "🥚", name: "Eggs", quantity: 12, bought: false },
  { id: 6, emoji: "🍅", name: "Tomatos", quantity: 15, bought: false },
  { id: 7, emoji: "🫑", name: "Green pepper", quantity: 5, bought: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(item) {
    console.log(item);
  }
  return (
    <div className="App">
      <header>My Shopping List</header>
      <ShoppingList items={items} />
      <FormAddItem onAddItem={handleAddItem} />
    </div>
  );
}

function ShoppingList({ items }) {
  return (
    <ul className="shopping-list">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  console.log(item);
  return (
    <li>
      <input type="checkbox" />
      <span className="emoji">{item.emoji}</span>
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <span className="delete-btn">🅧</span>
    </li>
  );
}

function FormAddItem({ onAddItem }) {
  const [emoji, setEmoji] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    const newItem = {
      emoji,
      name: itemName,
      quantity,
      bought: false,
      id: Date.now(),
    };
    console.log(newItem);
  }

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="🛒 emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="quantity"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
