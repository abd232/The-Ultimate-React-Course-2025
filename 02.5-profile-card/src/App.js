import "./App.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
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
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
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
      <span>
        {props.skill}{" "}
        {props.level === "advanced"
          ? "💪"
          : props.level === "intermediate"
            ? "👍"
            : "👶"}
      </span>
    </div>
  );
}

export default App;
