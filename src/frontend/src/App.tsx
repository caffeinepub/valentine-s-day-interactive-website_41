import { useState } from 'react';
import HomePage from './pages/HomePage';
import InteractivePage from './pages/InteractivePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'interactive'>('home');
  const [homeKey, setHomeKey] = useState(0);

  const handleReturnHome = () => {
    setCurrentPage('home');
    setHomeKey(prev => prev + 1); // Force HomePage to remount and reset state
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? (
        <HomePage key={homeKey} onAccept={() => setCurrentPage('interactive')} />
      ) : (
        <InteractivePage onReturnHome={handleReturnHome} />
      )}
    </div>
  );
}

export default App;
