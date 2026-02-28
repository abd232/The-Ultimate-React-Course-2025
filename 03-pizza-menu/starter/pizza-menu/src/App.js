import "./App.css";
import "./index.css";
import { pizzaData } from "./data.js";

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza CO.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizzas pizza={pizzaData} />
    </div>
  );
}

function Pizzas({ pizza }) {
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </ul>
  );
}

function Pizza({ pizza }) {
  if (pizza.soldOut)
    return (
      <li className="pizza sold-out">
        <img src={pizza.photoName} alt={pizza.name} />
        <div>
          <h3>{pizza.name} (Sold Out)</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.price}</span>
        </div>
      </li>
    );
  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 13;
  const isOpen = hour >= openHour && hour <= closeHour;
  if (isOpen) {
    return (
      <div className="footer">
        <div className="order">
          <p>Currently open until {closeHour}:00</p>
          <button className="btn">Order a pizza</button>
        </div>
      </div>
    );
  }
  return (
    <div className="footer">
      <div className="order">
        <p>Currently closed until {openHour}:00</p>
        <button className="btn" disabled>
          Order a pizza
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
export default App;
