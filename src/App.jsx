import { useState } from "react";
import LanguageButton from "./LanguageButton";
import LanguageCard from "./LanguageCard";

const languages = [
  {
    id: 1,
    title: "HTML",
    description: "HTML (HyperText Markup Language) è il linguaggio standard..."
  },
  {
    id: 2,
    title: "CSS",
    description: "CSS (Cascading Style Sheets) è un linguaggio di stile..."
  },
  {
    id: 3,
    title: "JavaScript",
    description: "JavaScript è un linguaggio di programmazione dinamico..."
  },
  {
    id: 4,
    title: "Node.js",
    description: "Node.js è un ambiente runtime lato server..."
  },
  {
    id: 5,
    title: "Express",
    description: "Express è un framework per Node.js..."
  },
  {
    id: 6,
    title: "ReactJS",
    description: "ReactJS è una libreria per costruire UI..."
  }
];

function App() {
  // 👉 partiamo dal primo linguaggio
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Learn Web development</h1>

      {/* BOTTONI */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {languages.map((lang) => (
          <LanguageButton
            key={lang.id}
            title={lang.title}
            isActive={selectedLanguage.id === lang.id}
            onClick={() => setSelectedLanguage(lang)}
          />
        ))}
      </div>

      {/* CARD UNICA */}
      <LanguageCard
        title={selectedLanguage.title}
        description={selectedLanguage.description}
      />
    </div>
  );
}

export default App;