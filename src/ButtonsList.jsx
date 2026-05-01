import { useState } from "react";
import LanguageButton from "./LanguageButton";
import LanguageDetail from "./LanguageDetail";

function ButtonsList({ languages }) {
    const [selected, setSelected] = useState(languages[0]);

    return (
        <>
            {/* BOTTONI */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                {languages.map((lang) => (
                    <LanguageButton
                        key={lang.id}
                        title={lang.title}
                        isActive={selected.id === lang.id}
                        onClick={() => setSelected(lang)}
                    />
                ))}
            </div>

            {/* CARD */}
            <LanguageDetail language={selected} />
        </>
    );
}

export default ButtonsList;