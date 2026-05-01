function LanguageCard({ title, description, isActive }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "10px"
            }}
        >
            <h2>{title}</h2>

            {isActive && <p>{description}</p>}
        </div>
    );
}

export default LanguageCard;