import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProdCarousel = ({ appliance }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:4000/search', {
          params: {
            query: appliance,
            per_page: 5
          }
        });

        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError('Failed to load photos. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [appliance]);

  return (
    <div className="flex justify-center my-8">
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && photos.length === 0 && <p>No photos found.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="rounded-lg shadow-md overflow-hidden">
            <img src={photo.src.medium} alt={photo.alt} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdCarousel;



































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProdCarousel = ({ appliance }) => {
//   const [photos, setPhotos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         // const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/search', {
//         const response = await axios.get('https://api.pexels.com/v1/search', {
//           headers: {
//             Authorization: process.env.REACT_APP_PEXELS_API_KEY // Use the correct environment variable name
//           },
//           params: {
//             query: appliance,
//             per_page: 5
//           }
//         });

//         setPhotos(response.data.photos);
//       } catch (error) {
//         console.error('Error fetching photos:', error);
//         setError('Failed to load photos. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPhotos();
//   }, [appliance]);

//   return (
//     <div className="flex justify-center my-8">
//       {isLoading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}
//       {!isLoading && !error && photos.length === 0 && <p>No photos found.</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {photos.map(photo => (
//           <div key={photo.id} className="rounded-lg shadow-md overflow-hidden">
//             <img src={photo.src.medium} alt={photo.alt} className="w-full h-64 object-cover" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProdCarousel;



















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