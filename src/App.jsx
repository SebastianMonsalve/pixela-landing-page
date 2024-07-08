import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './Pages/Portfolio';
import Root from './Pages/Root';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Root />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
