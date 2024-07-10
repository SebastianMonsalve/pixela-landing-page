import "./App.css";
import Features from "./Components/Features/Features";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Steps from "./Components/Steps/Steps";
import Carrusel from "./Components/Carrusel/Carrusel";
import OurWorks from "./Components/OurWorks/OurWorks";
import About from "./Components/About/About";

function App() {
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
      {/* Questions */}
      {/* Contact */}
      {/* Footer */}
    </main>
  );
}

export default App;
