import React, { useState } from 'react';

const ImageCard = ({ img, text, details }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative font-georgia">
      {/* Clickable Image */}
      <img
        src={img}
        alt={text}
        className="w-full h-64 object-cover rounded-xl shadow-md cursor-pointer"
        onClick={() => setShowModal(true)}
      />
      <p className="mt-2 text-sm text-gray-300 text-center">{text}</p>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">{text}</h3>
            <p className="mb-6">{details}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
