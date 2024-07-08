import { useEffect } from 'react';
import About from '../Components/About/About';
import Carrusel from '../Components/Carrusel/Carrusel';
import Features from '../Components/Features/Features';
import Home from '../Components/Home/Home';
import Services from '../Components/Services/Services';
import Steps from '../Components/Steps/Steps';

function Root() {
  useEffect(() => {
    document.title = 'Home | Pixela - Web Developing Company';
  });

  return (
    <main>
      <Home />
      <Features />
      <Services />
      <Steps />
      <Carrusel />
      {/* Work */}
      {/* Testimonial */}
      <About />
      {/* Questions */}
      {/* Contact */}
      {/* Footer */}
    </main>
  );
}

export default Root;
