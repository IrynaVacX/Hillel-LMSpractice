import React, { Component } from "react";

const emojis = ["😀", "😻", "😂", "🦄", "🥰", "👾", "😎"];

class EmojiVotingApp extends Component {
  constructor(props) {
    super(props);
    const savedVotes = localStorage.getItem("emojiVotes");
    this.state = {
      votes: savedVotes
        ? JSON.parse(savedVotes)
        : emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {}),
      winner: null,
    };
  }

  handleVote = (emoji) => {
    this.setState(
      (prevState) => {
        const updatedVotes = { ...prevState.votes, [emoji]: prevState.votes[emoji] + 1 };
        return { votes: updatedVotes };
      },
      () => {
        this.setState({ winner: null });
        localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes));
      }
    );
  };

  showWinner = () => {
    const totalVotes = Object.values(this.state.votes).reduce((acc, v) => acc + v, 0);
    if (totalVotes === 0) {
      this.setState({ winner: "No votes have been cast yet!" });
      return;
    }
    const maxVotes = Math.max(...Object.values(this.state.votes));
    const winnerEmoji = Object.keys(this.state.votes).find((emoji) => this.state.votes[emoji] === maxVotes);
    this.setState({ winner: { emoji: winnerEmoji, votes: maxVotes } });
  };

  clearResults = () => {
    const clearedVotes = emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {});
    this.setState({ votes: clearedVotes, winner: null }, () => {
      localStorage.removeItem("emojiVotes");
    });
  };

  render() {
    const { votes, winner } = this.state;
    const totalVotes = Object.values(votes).reduce((acc, v) => acc + v, 0);

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Emoji Voting</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {emojis.map((emoji) => (
            <div key={emoji} style={{ textAlign: "center" }}>
              <button
                onClick={() => this.handleVote(emoji)}
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
            onClick={this.showWinner}
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
            onClick={this.clearResults}
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
        {totalVotes === 0 && (
          <div style={{ marginTop: "10px", fontSize: "18px", color: "red" }}>
            No votes have been cast yet. Start voting now!
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVotingApp;
