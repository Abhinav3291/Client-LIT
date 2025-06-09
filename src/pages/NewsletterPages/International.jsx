import React from 'react';
import FlipPage from '../../components/FlipPage';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import SectionContent from '../../components/SectionContent';

const International = () => {
  return (
    <FlipPage>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/Untitled design_20250429_204502_0000.png')",
        }}
      >
        <Navbar />

        <div className="flex flex-col items-center pt-20 px-6">
          {/* Stylized Title */}
          <div className="text-center text-white mb-10">
            <div className="text-4xl md:text-5xl font-bold leading-tight">
              INTERNATIONAL
            </div>
            <div className="text-5xl md:text-6xl font-extrabold tracking-wide">
              FASHION
            </div>
          </div>

          {/* Hero Image */}
          <img
            src="/TSV_0159-800x600.jpg"
            alt="Fashion Model"
            className="w-full max-w-7xl aspect-video object-cover rounded-lg shadow-2xl mb-12"
          />

          {/* Sectioned Content */}
          <div className="w-full">
            <Section
              title={
                <div className="text-white text-center">
                  <div className="text-4xl md:text-5xl font-bold leading-tight">Sustainable</div>
                  <div className="text-5xl md:text-6xl font-extrabold tracking-wide">Fashion</div>
                 
                </div>
              }
            >
              <SectionContent sectionKey="sustainable-international" />
            </Section>

            <Section
              title={
                <div className="text-white text-center">
                  <div className="text-4xl md:text-5xl font-bold leading-tight">Fast</div>
                  <div className="text-5xl md:text-6xl font-extrabold tracking-wide">Fashion</div>
                
                </div>
              }
            >
              <SectionContent sectionKey="fast-international" />
            </Section>

            <Section
              title={
                <div className="text-white text-center">
                  <div className="text-4xl md:text-5xl font-bold leading-tight">Luxury</div>
                  <div className="text-5xl md:text-6xl font-extrabold tracking-wide">Fashion</div>
                  
                </div>
              }
            >
              <SectionContent sectionKey="luxury-international" />
            </Section>

            <Section
              title={
                <div className="text-white text-center">
                  <div className="text-4xl md:text-5xl font-bold leading-tight">Sneakers</div>
                  <div className="text-5xl md:text-6xl font-extrabold tracking-wide">World</div>
                  
                </div>
              }
            >
              <SectionContent sectionKey="sneakers-international" />
            </Section>
          </div>
        </div>
        <Footer />
      </div>
    </FlipPage>
  );
};

export default International;
