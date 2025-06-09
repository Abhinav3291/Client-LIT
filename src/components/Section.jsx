const Section = ({ title, children }) => (
  <div className="my-12 w-full max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-left mb-6 text-white">{title}</h2>
    <div>{children}</div>
  </div>
);
export default Section;