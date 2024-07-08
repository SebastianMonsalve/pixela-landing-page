import { useEffect } from 'react';
import Header from '../Components/Header/Header';
import Portfolio_List from '../Components/Portfolio_List/Portfolio_List';

function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio | Pixela - Web Developing Company';
  });

  return (
    <main>
      <Header />
      <Portfolio_List />
      {/* Contact */}
      {/* Footer */}
    </main>
  );
}

export default Portfolio;
