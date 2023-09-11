import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>     
    </div>
  );
}

export default App;
