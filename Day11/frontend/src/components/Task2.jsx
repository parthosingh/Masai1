// QuoteViewer.jsx
import React, { useEffect, useState } from "react";

// Simple spinner style
const spinnerStyle = {
  margin: "20px auto",
  width: "40px",
  height: "40px",
  border: "4px solid #ccc",
  borderTop: "4px solid #333",
  borderRadius: "50%",
  animation: "spin 1s linear infinite"
};

// CSS animation for fade-in
const fadeInStyle = {
  animation: "fadeIn 0.5s ease-in"
};

// Main Component
const QuoteViewer = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount and every 30 seconds
  useEffect(() => {
    fetchQuote(); // Initial fetch
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2>🌞 Daily Quote Viewer</h2>

      {loading ? (
        <div style={spinnerStyle}></div>
      ) : (
        <div style={fadeInStyle}>
          <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
            “{quote.content}”
          </p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
            — {quote.author}
          </p>
        </div>
      )}

      <button
        onClick={fetchQuote}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#333",
          color: "white",
          cursor: "pointer"
        }}
      >
        Get New Quote
      </button>

      {/* CSS animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default QuoteViewer;
