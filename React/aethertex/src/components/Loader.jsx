import React, { useState, useEffect } from "react";
import "../stylesheets/Loader.css";

export default function Loader({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!onFinish) return;
    // fade out after a short delay
    const timer = setTimeout(() => setFade(true), 1000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div id="preloder" className={fade ? "fade-out" : ""}>
      <div className="loader"></div>
    </div>
  );
}