function Spinner() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "40px 0" }}>
            <div style={{
                width: 48, height: 48, border: "4px solid #e2e8f0",
                borderTop: "4px solid #1B6B3A", borderRadius: "50%",
                animation: "spin 0.8s linear infinite"
            }} />
            <p style={{ color: "#1B6B3A", fontWeight: 600, fontSize: 15 }}>Greeneth Intelligence is researching your farm advisory…</p>
            <p style={{ color: "#64748b", fontSize: 13 }}>This takes about 15–30 seconds</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

export default Spinner