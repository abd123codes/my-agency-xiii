import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/homepage/homepage';
import { Portfolio } from "./components/portfolio/portfolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
