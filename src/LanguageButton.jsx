function LanguageButton({ title, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: isActive ? "gold" : "royalblue",
                color: "white"
            }}
        >
            {title}
        </button>
    );
}

export default LanguageButton;