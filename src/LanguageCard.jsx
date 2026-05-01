function LanguageCard({ title, description }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px"
            }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default LanguageCard;