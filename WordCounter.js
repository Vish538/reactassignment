// WordCounter.js
import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    // Count words by splitting the text using whitespace characters
    const words = newText.split(/\s+/);
    // Filter out empty words
    const filteredWords = words.filter((word) => word.trim() !== '');
    setWordCount(filteredWords.length);
  };

  return (
    <div>
      <h1>RESPONSIVE PARAGRAPH WORD COUNTER</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
        rows="5"
        cols="50"
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
