import React, { useState } from 'react';

const TextPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text) return alert('Please enter some text!');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/detect-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Text Fake Media Detection</h1>
      <textarea
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
      />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
      {result && <p className={`result ${result === 'Fake' ? 'fake' : 'real'}`}>Result: {result}</p>}
    </div>
  );
};

export default TextPage;
