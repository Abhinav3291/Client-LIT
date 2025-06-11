import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SectionContent from '../components/SectionContent';
import Section from '../components/Section';
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Newsletter = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/Untitled design_20250429_204502_0000.png')" }}
    >
      <Navbar />
      <div className="min-h-screen pt-20 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4 text-white">
            NEWSLETTER
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-40 text-lg font-medium mb-6">
            {[
              { label: 'International', path: '/international' },
              { label: 'Domestic', path: '/domestic' },
            ].map(({ label, path }) => (
              <span
                key={label}
                onClick={() => navigate(path)}
                className="text-gray-100 cursor-pointer border px-6 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          <div className="flex justify-center mb-6">
            <img
              src="/pexels-pixabay-265705.jpg"
              alt="Hero"
              className="w-full max-w-7xl rounded-lg shadow-lg"
            />
          </div>

          {/* Admin Button below image, left-aligned */}
          <div className="flex justify-start mb-10 max-w-7xl mx-auto">
            <button
              onClick={() => navigate('/admin')}
              className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg shadow-[0_0_10px_rgba(168,85,247,0.5)] flex items-center gap-2 hover:bg-purple-50 transition-all text-sm md:text-base"
            >
              <ShieldCheck className="w-5 h-5" />
              Admin Dashboard
            </button>
          </div>

          {/* All Sections - Titles in one line */}
          <Section
            title={
              <div className="text-white text-left text-5xl md:text-6xl font-extrabold tracking-wide">
                Sustainable Fashion
              </div>
            }
          >
            <SectionContent sectionKey="sustainable" />
          </Section>

          <Section
            title={
              <div className="text-white text-left text-5xl md:text-6xl font-extrabold tracking-wide">
                Fast Fashion
              </div>
            }
          >
            <SectionContent sectionKey="fast" />
          </Section>

          <Section
            title={
              <div className="text-white text-left text-5xl md:text-6xl font-extrabold tracking-wide">
                Luxury Fashion
              </div>
            }
          >
            <SectionContent sectionKey="luxury" />
          </Section>

          <Section
            title={
              <div className="text-white text-left text-5xl md:text-6xl font-extrabold tracking-wide">
                Sneakers World
              </div>
            }
          >
            <SectionContent sectionKey="sneakers" />
          </Section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;
