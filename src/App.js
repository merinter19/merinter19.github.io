import './App.css';
import Home from './Components/Home';
import PageList from './Components/PageList';
import Header from './Layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageList" element={<PageList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
