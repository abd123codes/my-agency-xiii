import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/homepage/homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
