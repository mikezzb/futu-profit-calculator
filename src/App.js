import StoreProvider from './store';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Home />
      </div>
    </StoreProvider>
  );
}

export default App;
