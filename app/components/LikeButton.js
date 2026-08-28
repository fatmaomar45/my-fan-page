

"use client";

import { useState, useCallback } from "react";

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`liked-${id}`);
      return stored === "true";
    }
    return false;
  });

  const toggleLike = useCallback(() => {
    const next = !liked;
    setLiked(next);
    localStorage.setItem(`liked-${id}`, String(next));
  }, [id, liked]);

  return (
    <button
      onClick={toggleLike}
      style={{
        padding: "0.5rem 1rem",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        background: liked ? "var(--accent-light)" : "transparent",
        color: liked ? "var(--accent)" : "var(--text-secondary)",
        fontSize: "1rem",
      }}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}