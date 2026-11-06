import Sidebar from '@/components/Sidebar';
import HomePage from '@/pages/HomePage';
import StorePage from '@/pages/StorePage';
import { getStore } from '@/data/stores';
import { isStorePage, usePageRoute } from '@/hooks/usePageRoute';
import { useTheme } from '@/hooks/useTheme';

const BACKDROP_IMAGE = 'https://images.pexels.com/photos/36764008/pexels-photo-36764008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { page, navigate } = usePageRoute();

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-900 transition-colors duration-500 dark:text-slate-100">
      <div aria-hidden className="app-backdrop">
        <img src={BACKDROP_IMAGE} alt="" className="app-backdrop-image" />
        <div className="app-backdrop-tint" />
      </div>

      <Sidebar page={page} onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />

      <main key={page} className="page-enter relative z-10">
        {isStorePage(page) ? (
          <StorePage store={getStore(page)} onNavigate={navigate} />
        ) : (
          <HomePage onNavigate={navigate} />
        )}
      </main>
    </div>
  );
}

export default App;
