import React, { useState, useEffect } from 'react';
import { FiLink } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';
import image1 from '../../assets/onlinebanking.svg';
import image2 from '../../assets/weather.svg';
import image3 from '../../assets/spam.svg';
import image4 from '../../assets/chat.svg';

const Project = () => {
  const initialData = [
    { id: 1, src: image1, alt: 'JAVA', link: 'https://example1.com', likes: 0 },
    { id: 2, src: image2, alt: 'C#', link: 'https://example2.com', likes: 0 },
    { id: 3, src: image3, alt: 'PYTHON', link: 'https://example3.com', likes: 0 },
    { id: 4, src: image4, alt: 'PYTHON', link: 'https://example4.com', likes: 0 },
  ];

  // Load initial data from Local Storage if available
  const [imageData, setImageData] = useState(() => {
    const savedData = localStorage.getItem('projects');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  // Save data to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(imageData));
  }, [imageData]);
  // Handle Like Button Click
  const handleLike = (id) => {
    const updatedImages = imageData.map((image) =>
      image.id === id ? { ...image, likes: image.likes +1 } : image
    );
    setImageData(updatedImages);
  };

  return (
    <div className="mt-12">
      <h1 className="text-center font-medium mt-10 text-3xl">
        <span className="text-red-400 text-5xl">P</span>ROJECTS
      </h1>

      <div className="flex items-center flex-col gap-5 mt-5 md:flex-row md:justify-center">
        {imageData.map((image) => (
          <div key={image.id} className="bg-white shadow-lg rounded-lg px-10">
            {/* Project Image */}
            <img src={image.src} alt={image.alt} className="w-32 h-36" />

            {/* Project Title */}
            <div className="p-4">
              <p className="text-lg text-center text-red-400">{image.alt}</p>
            </div>

            {/* Project Link */}
            <div className="flex justify-end">
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-yellow-300"
              >
                <FiLink className="flex mb-2" size={24} />
              </a>
            </div>

            {/* Like Button */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleLike(image.id)}
                className="flex justify-end text-red-400 p-1 "
              >
                <div className=' flex justify-start gap-2'>
                <IoIosHeartEmpty   className=" border-red-500 text-2xl -ml-8 " />
                <span className="text-black  ">{image.likes} </span>
      </div>
              </button>
              
              
            </div>
            
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Project;
