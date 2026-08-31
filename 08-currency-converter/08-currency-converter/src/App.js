import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <Header>
        <h1 className="title">Currency-converter</h1>
      </Header>

      <Main />
    </div>
  );
}
