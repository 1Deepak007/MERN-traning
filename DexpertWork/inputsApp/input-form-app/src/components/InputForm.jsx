import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [formData, setFormData] = useState({
    text: '', checkbox: false,
    radio: '',  dropdown: '',
    file: null, audio: null,
    video: null, color: '#000000', 
    date: '', datetime: '',
    image: null, url: '',
    customRange: 0 
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting form data', error);
      alert('Error submitting form data');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
        <h1 className='text-center underline text-4xl mt-2 mb-5'>Form</h1>
        <label className="block mb-4">
          <span className="text-gray-700">Text:</span>
          <input type="text" name="text" onChange={handleChange} required className="form-input mt-1 block w-full" />
        </label>
        <label className="block mb-4">
          <input type="checkbox" name="checkbox" onChange={handleChange} required className="form-checkbox mr-2" />
          <span className="text-gray-700">Checkbox</span>
        </label>
        <div className="mb-4">
          <span className="text-gray-700">Radio Button:</span>
          <label className="inline-flex items-center ml-4">
            <input type="radio" name="radio" value="option1" onChange={handleChange} required className="form-radio mr-2" />
            <span>Option 1</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input type="radio" name="radio" value="option2" onChange={handleChange} required className="form-radio mr-2" />
            <span>Option 2</span>
          </label>
        </div>
        <label className="block mb-4">
          <span className="text-gray-700">Dropdown:</span>
          <select name="dropdown" onChange={handleChange} required className="form-select mt-1 block w-full">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">File:</span>
          <input type="file" name="file" onChange={handleChange} required className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Audio:</span>
          <input type="file" name="audio" accept="audio/*" onChange={handleChange} required className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Video:</span>
          <input type="file" name="video" accept="video/*" onChange={handleChange} required className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Color:</span>
          <input type="color" name="color" onChange={handleChange} className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Date:</span>
          <input type="date" name="date" onChange={handleChange} className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Datetime:</span>
          <input type="datetime-local" name="datetime" onChange={handleChange} className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Image:</span>
          <input type="file" name="image" accept="image/*" onChange={handleChange} className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">URL:</span>
          <input type="url" name="url" onChange={handleChange} className="form-input mt-1 block" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Custom Range</span>
          <input type="range" name="customRange" min="0" max="100" onChange={handleChange} className="form-input mt-1 block" />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </>
  );
};

export default InputForm;
