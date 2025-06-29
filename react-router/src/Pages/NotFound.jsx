import React from "react";

function NotFound() {
    const bgStyle = {
    backgroundImage: `url("https://zerostainautomotive.com/cdn/shop/products/Mazdaspeed_d15a3356-c9b0-4df9-92f3-f4b769f72503.jpg?v=1628835531")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textShadow: "1px 1px 4px black",
    padding: "2rem",
    textAlign: "center",
  };

  return (
    <div style={bgStyle}>
    <div className="page">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
    </div>
  );
}

export default NotFound;
