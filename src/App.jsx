import { useEffect } from 'react';
import Header from './components/Header';
import SobreMim from './pages/SobreMim';

function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Header />
      <SobreMim />
    </>
  );
}

export default App
