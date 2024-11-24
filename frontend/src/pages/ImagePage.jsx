import React, { useState } from 'react';

const ImagePage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = (e) => setFile(e.target.files[0]);

  const handleSubmit = async () => {
    if (!file) return alert('Please upload an image!');
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/detect-image', {
        method: 'POST',
        body: formData,
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
      <h1>Image Fake Media Detection</h1>
      <input type="file" accept="image/*" onChange={handleUpload} />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
      {result && <p className={`result ${result === 'Fake' ? 'fake' : 'real'}`}>Result: {result}</p>}
    </div>
  );
};

export default ImagePage;
