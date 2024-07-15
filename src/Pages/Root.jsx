import { useEffect } from "react";
import About from "../Components/About/About";
import Carrusel from "../Components/Carrusel/Carrusel";
import OurWorks from "../Components/OurWorks/OurWorks";
import Features from "../Components/Features/Features";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Steps from "../Components/Steps/Steps";
import Questions from "../Components/Questions/Questions";

function Root() {
  useEffect(() => {
    document.title = "Home | Pixela - Web Developing Company";
  });

  return (
    <main>
      <Home />
      <Features />
      <Services />
      <Steps />
      <Carrusel />
      <OurWorks />
      {/* Testimonial */}
      <About />
      <Questions />
      {/* Contact */}
      {/* Footer */}
    </main>
  );
}

export default Root;
