import { useState } from "react";
import LanguageButton from "./LanguageButton";
import LanguageCard from "./LanguageCard";

const languages = [
  { id: 1, title: "HTML", description: "HTML (HyperText Markup Language)..." },
  { id: 2, title: "CSS", description: "CSS (Cascading Style Sheets)..." },
  { id: 3, title: "JavaScript", description: "JavaScript è un linguaggio..." },
  { id: 4, title: "Node.js", description: "Node.js è un runtime JS..." },
  { id: 5, title: "Express", description: "Express è un framework..." },
  { id: 6, title: "ReactJS", description: "ReactJS è una libreria..." }
];

function App() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id); // toggle
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Learn Web development</h1>

      {/* BOTTONI */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {languages.map((lang) => (
          <LanguageButton
            key={lang.id}
            title={lang.title}
            isActive={activeId === lang.id}
            onClick={() => handleClick(lang.id)}
          />
        ))}
      </div>

      {/* CARD */}
      {languages.map((lang) => (
        <LanguageCard
          key={lang.id}
          title={lang.title}
          description={lang.description}
          isActive={activeId === lang.id}
        />
      ))}
    </div>
  );
}

export default App;