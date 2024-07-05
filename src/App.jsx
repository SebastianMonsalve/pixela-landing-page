import "./App.css";
import Features from "./Components/Features/Features";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Steps from "./Components/Steps/Steps";
import Carrusel from "./Components/Carrusel/Carrusel";
import About from "./Components/About/About";

function App() {
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

export default App;
