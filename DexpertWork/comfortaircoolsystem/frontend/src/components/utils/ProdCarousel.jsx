import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ProdCarousel = ({ appliance }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Added state for loading
  const [error, setError] = useState(null); // Added state for error

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true); // Set loading to true before fetching
      setError(null); // Clear any existing errors

      try {
        // const response = await axios.get(`https://source.unsplash.com/1600x900/?${appliance}`);
        const response = await axios.get(`https://source.unsplash.com/1600x900/telephone`);
        setImageUrl(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching image:', error);
        setError('Failed to load image. Please try again later.'); // User-friendly error message
      } finally {
        setIsLoading(false); // Set loading to false after finishing
      }
    };

    fetchImage();
  }, [appliance]);

  return (
    <div className="flex justify-center">
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {imageUrl && (
        <img src={imageUrl} alt={`Random ${appliance}`} style={{ height: '400px', objectFit: 'cover' }} />
      )}
    </div>
  );
};

export default ProdCarousel;

















// // "https://random-image-pepebigotes.vercel.app/api/random-image"
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const ProdCarousel = ({ appliance }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get(`https://source.unsplash.com/1600x900/?${appliance}`);
//         setImageUrl(response.request.responseURL);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     fetchImage();
//   }, [appliance]);

//   return (
//     <div className="flex justify-center">
//       {imageUrl ? (
//         <img src={imageUrl} alt={`Random ${appliance}`} style={{ height: '400px', objectFit: 'cover' }} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProdCarousel;