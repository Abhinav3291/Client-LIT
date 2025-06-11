import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api-lit-5gop.onrender.com/api/news'; // Replace with actual URL

const AdminDashboard = () => {
  const [news, setNews] = useState([]);
  const [newNews, setNewNews] = useState({
    sectionKey: '',
    title: '',
    description: '',
    image_url: '',
  });

  const fetchNews = async () => {
    try {
      const res = await axios.get(API_URL);
      setNews(res.data);
    } catch (err) {
      console.error('Error fetching news:', err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleInputChange = (e, id, field) => {
    const updated = news.map(item =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setNews(updated);
  };

  const handleUpdate = async (id) => {
    const item = news.find(n => n.id === id);
    try {
      await axios.put(`${API_URL}/${id}`, item);
      alert('News updated!');
    } catch (err) {
       console.error('Something went wrong:', err.message);
      
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNews(prev => prev.filter(n => n.id !== id));
    } catch (err) {
       console.error('Something went wrong:', err.message);

    
    }
  };

  const handleAdd = async () => {
    try {
      const res = await axios.post(API_URL, newNews);
      setNews(prev => [...prev, res.data]);
      setNewNews({ sectionKey: '', title: '', description: '', image_url: '' });
    } catch (err) {
       console.error('Failed to connect to Cosmos DB:', err);
       
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Admin - Manage Newsletter</h1>

      {/* Add New News */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Latest News</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['sectionKey', 'title', 'description', 'image_url'].map(field => (
            <input
              key={field}
              type="text"
              placeholder={field}
              value={newNews[field]}
              onChange={e => setNewNews({ ...newNews, [field]: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2"
            />
          ))}
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add News
        </button>
      </div>

      {/* List + Edit News */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Edit Existing News</h2>
        <div className="space-y-6">
          {news.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow-md space-y-2">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={item.sectionKey}
                  onChange={e => handleInputChange(e, item.id, 'sectionKey')}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="text"
                  value={item.title}
                  onChange={e => handleInputChange(e, item.id, 'title')}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="text"
                  value={item.description}
                  onChange={e => handleInputChange(e, item.id, 'description')}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="text"
                  value={item.image_url}
                  onChange={e => handleInputChange(e, item.id, 'image_url')}
                  className="border px-3 py-2 rounded"
                />
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleUpdate(item.id)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
