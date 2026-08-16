import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar src="Abdallah.jpg" alt="Abdallah" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.src} alt={props.alt} className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Abdallah</h1>
      <p>I'm a software engineer and I love to build web applications.</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill skill="HTML" color="red" />
      <Skill skill="CSS" color="yellow" />
      <Skill skill="JavaScript" color="blue" />
      <Skill skill="React" color="lightgray" />
    </ul>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: props.color || "#eee",
        padding: "0.5rem",
        margin: "0.25rem",
      }}
    >
      <span>{props.skill}</span>
    </div>
  );
}

export default App;
