import ButtonsList from "./ButtonsList";

const languages = [
  { id: 1, title: "HTML", description: "HTML è il linguaggio..." },
  { id: 2, title: "CSS", description: "CSS è un linguaggio di stile..." },
  { id: 3, title: "JavaScript", description: "JavaScript è dinamico..." },
  { id: 4, title: "Node.js", description: "Node.js runtime server..." },
  { id: 5, title: "Express", description: "Express framework..." },
  { id: 6, title: "ReactJS", description: "React UI library..." }
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Learn Web development</h1>

      <ButtonsList languages={languages} />
    </div>
  );
}

export default App;