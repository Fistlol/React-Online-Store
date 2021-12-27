import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductPage />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route path="*" exact element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
