
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SectionContent from '../components/SectionContent';
import Section from '../components/Section';
import React from 'react';


const Newsletter = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/Untitled design_20250429_204502_0000.png')" }}>
      <Navbar />
      <div className="min-h-screen pt-20 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4 text-white">NEWSLETTER</h1>
         <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-40 text-lg font-medium mb-6">
  {[
    { label: "International", path: "/international" },
    { label: "Domestic", path: "/domestic" },
  ].map(({ label, path }) => (
    <span
      key={label}
      onClick={() => navigate(path)}
      className="text-gray-100 cursor-pointer border  px-6 py-2 rounded-md hover:text-white transition-all duration-300
                 hover:shadow-[0_0_15px_4px_rgba(168,85,247,0.7)] hover:bg-purple-600/10"
    >
      {label}
    </span>
  ))}
</div>

          <div className="flex justify-center mb-10">
            <img
              src="/pexels-pixabay-265705.jpg"
              alt="Hero"
              className="w-full max-w-7xl rounded-lg shadow-lg"
            />
          </div>
        <Section title={
  <div className="text-white text-center">
    <div className="text-4xl md:text-5xl font-bold leading-tight">Sustainable</div>
    <div className="text-5xl md:text-6xl font-extrabold tracking-wide">Fashion</div>
  </div>
}>
  <SectionContent sectionKey="sustainable" />
</Section>

<Section title={
  <div className="text-white text-center">
    <div className="text-4xl md:text-5xl font-bold leading-tight">Fast</div>
    <div className="text-5xl md:text-6xl font-extrabold tracking-wide">Fashion</div>
  </div>
}>
  <SectionContent sectionKey="fast" />
</Section>

<Section title={
  <div className="text-white text-center">
    <div className="text-4xl md:text-5xl font-bold leading-tight">Luxury</div>
    <div className="text-5xl md:text-6xl font-extrabold tracking-wide">Fashion</div>
  </div>
}>
  <SectionContent sectionKey="luxury" />
</Section>

<Section title={
  <div className="text-white text-center">
    <div className="text-4xl md:text-5xl font-bold leading-tight">Sneakers</div>
    <div className="text-5xl md:text-6xl font-extrabold tracking-wide">World</div>
  </div>
}>
  <SectionContent sectionKey="sneakers" />
</Section>

        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;
