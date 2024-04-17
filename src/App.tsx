import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WidgetPage from './pages/WidgetPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/widget" element={<WidgetPage />} />
      </Routes>
    </div>
  );
}

export default App;
