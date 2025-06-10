import React, { useEffect, useState } from 'react';

const SectionContent = ({ sectionKey }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const AZURE_API_URL = 'https://api-lit-5gop.onrender.com/api/news';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${AZURE_API_URL}/${sectionKey}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Log the data to see the image_url values
        console.log('Fetched data for section:', sectionKey, data);
        setItems(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 300000); // 5 mins (300000 ms)
    return () => clearInterval(interval);
  }, [sectionKey]);

  const openFullCard = (item) => {
    setSelectedItem(item);
  };

  const closeFullCard = () => {
    setSelectedItem(null);
  };

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (items.length === 0) return <p className="text-center text-white">No news available.</p>;

  const renderCard = (item, isLarge = false) => (
    <div
      key={item.id}
      className="group [perspective:1000px]" // Establishes 3D perspective for the flip
    >
      <div
        className={`relative w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180 ${
          isLarge ? 'h-80' : 'h-60'
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl shadow-xl overflow-hidden">
          <img
            src={item.image_url} // This is where the image URL from your API goes
            alt={item.title}
            onError={(e) => {
              // This is the fallback for when item.image_url fails
              e.target.onerror = null; // Prevents infinite loop if fallback also fails
              e.target.src = '/VERSACE.webp'; // Path to your fallback image in the public folder
              console.error(`Image failed to load for item: ${item.title}. Using fallback.`);
            }}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-3 w-full">
            <h4 className="text-lg font-semibold truncate">{item.title}</h4>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-purple-100 text-gray-800 p-5 rounded-xl shadow-2xl shadow-purple-300 cursor-pointer"
          onClick={() => openFullCard(item)}
        >
          <h4 className="text-lg font-bold mb-2">{item.title}</h4>
          <p className="text-sm">{item.description}</p> {/* Displays the description */}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Smaller Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.slice(0, 3).map((item) => renderCard(item))}
      </div>

      {/* Larger Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.slice(3, 5).map((item) => renderCard(item, true))}
      </div>

      {/* Fullscreen Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-2xl relative font-georgia max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeFullCard}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedItem.image_url}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedItem.title}</h2>
            <p className="text-md text-gray-700 mb-4">{selectedItem.content}</p>
            <p className="text-sm text-gray-600">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionContent;
