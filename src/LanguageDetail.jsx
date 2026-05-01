function LanguageDetail({ language }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px"
            }}
        >
            <h2>{language.title}</h2>
            <p>{language.description}</p>
        </div>
    );
}

export default LanguageDetail;