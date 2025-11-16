import './App.css';
import CoverPage from './components/CoverPage';
import TabbedContent from './components/TabbedContent';

function App() {
  return (
    <div className="app">
      {/* Fixed Sidebar - Left 28% */}
      <aside className="sidebar-fixed">
        <CoverPage />
      </aside>

      {/* Tabbed Content - Right 72% */}
      <main className="content-scroll-area">
        <TabbedContent />
      </main>
    </div>
  );
}

export default App;
