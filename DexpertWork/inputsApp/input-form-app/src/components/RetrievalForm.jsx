import React, { useState } from 'react';
import axios from 'axios';

const RetrievalForm = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:5000/inputs/${id}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error retrieving data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container bg-slate-400">
      <div className="row justify-content-center">
        <h2 className="text-center text-3xl">Retrieval Form</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">ID:</span>
          <input type="number" name="id" onChange={handleChange} value={id} required className="form-input mt-1 block w-full" />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {isLoading && <p className="text-center text-gray-700">Loading data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {data && (
        <div>
          <p>Name: {data.text}</p>
          <p>Checkbox: {data.checkbox ? 'Checked' : 'Unchecked'}</p>
          <p>Radio: {data.radio}</p>
          <p>Dropdown: {data.dropdown}</p>
          <p>Color: {data.color}</p>
          <p>Range: {data.customRange}</p>
          <p>Date: {data.date}</p>
          <p>Datetime: {data.datetime}</p>
          <p>URL: {data.url}</p>
          <p>File: {data.file}</p>
          {data.image && <img src={data.image} className="h-10 w-10" alt="Uploaded" />}
          {data.audio && (
            <audio controls>
              <source src={data.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
          {data.video && (
            <video width="320" height="240" controls>
              <source src={data.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default RetrievalForm;
