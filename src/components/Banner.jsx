// src/components/Banner.jsx
const Banner = ({ title }) => (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 p-6">
      <h1 className="text-3xl font-bold text-center text-white">
        {title}
      </h1>
    </header>
  );
  
  export default Banner;

 //NOTES:
 //sonarLint seems to have a problem with us not using props validation in this file,
 // but it seems obvious that the title prop is a string and is required.
 // We can ignore this warning for now, but for larger scale enterprise applications,
 // it is a good idea to use prop validation because it helps to catch bugs early on,
 // and it also serves as documentation for other developers who may be working on the code.