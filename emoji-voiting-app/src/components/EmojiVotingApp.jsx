import React, { useState, useEffect } from "react";

const emojis = ["😀", "😻", "😂", "🦄", "🥰", "👾", "😎"];

const EmojiVotingApp = () => {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem("emojiVotes");
    return savedVotes ? JSON.parse(savedVotes) : emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {});
  });

  const [winner, setWinner] = useState(null);

  const handleVote = (emoji) => {
    setWinner(null);
    const updatedVotes = { ...votes, [emoji]: votes[emoji] + 1 };
    setVotes(updatedVotes);
    localStorage.setItem("emojiVotes", JSON.stringify(updatedVotes));
  };

  const showWinner = () => {
    const totalVotes = Object.values(votes).reduce((acc, v) => acc + v, 0);
    if (totalVotes === 0) {
      setWinner("No votes have been cast yet!");
      return;
    }
    const maxVotes = Math.max(...Object.values(votes));
    const winnerEmoji = Object.keys(votes).find((emoji) => votes[emoji] === maxVotes);
    setWinner({ emoji: winnerEmoji, votes: maxVotes });
  };

  const clearResults = () => {
    const clearedVotes = emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {});
    setVotes(clearedVotes);
    setWinner(null);
    localStorage.removeItem("emojiVotes");
  };

  const totalVotes = Object.values(votes).reduce((acc, v) => acc + v, 0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Emoji Voting</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {emojis.map((emoji) => (
          <div key={emoji} style={{ textAlign: "center" }}>
            <button
              onClick={() => handleVote(emoji)}
              style={{
                fontSize: "24px",
                padding: "10px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {emoji}
            </button>
            <div style={{ marginTop: "5px", fontSize: "18px" }}>{votes[emoji]} votes</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={showWinner}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            margin: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Show Results
        </button>
        <button
          onClick={clearResults}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            margin: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Clear Results
        </button>
      </div>
      {winner ? (
        typeof winner === "string" ? (
          <div style={{ marginTop: "20px", fontSize: "24px", color: "#333" }}>{winner}</div>
        ) : (
          <div style={{ marginTop: "20px", fontSize: "24px", color: "#333" }}>
            Winner: <span style={{ fontSize: "32px" }}>{winner.emoji}</span> with {winner.votes} votes!
          </div>
        )
      ) : null}
      <div style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
        Total Votes: {totalVotes}
      </div>
    </div>
  );
};

export default EmojiVotingApp;
