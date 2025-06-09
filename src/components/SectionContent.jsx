import React, { useEffect, useState } from 'react';

const SectionContent = ({ sectionKey }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeItemId, setActiveItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const AZURE_API_URL = 'https://api-lit-5gop.onrender.com/api/news';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${AZURE_API_URL}/${sectionKey}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 300000); // 5 mins
    return () => clearInterval(interval);
  }, [sectionKey]);

  const handleImageClick = (id) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

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
      className="relative rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 group"
    >
      <div
        className={`w-full overflow-hidden ${isLarge ? 'h-80' : 'h-59'}`}
        onClick={() => handleImageClick(item.id)}
      >
        <img
          src={item.image_url}
          alt={item.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/VERSACE.webp';
          }}
          className="w-full h-full object-cover cursor-pointer"
        />

        {activeItemId === item.id && (
          <div
            className="absolute inset-0 bg-black bg-opacity-60 text-white p-5 flex items-center justify-center text-sm text-center cursor-pointer"
            onClick={() => openFullCard(item)}
          >
            <p>{item.description}</p>
          </div>
        )}
      </div>

      <div className="p-4 bg-transparent">
        <h4 className={`truncate text-white ${isLarge ? 'text-xl' : 'text-lg'} font-semibold`}>
          {item.title}
        </h4>
        <p className="text-sm text-gray-400 line-clamp-3">{item.content}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-10 ">
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
