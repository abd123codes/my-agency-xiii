import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/homepage/homepage';
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from './components/contact/contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
