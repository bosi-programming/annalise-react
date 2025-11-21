import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { CirculoVip } from './screens/CirculoVip';
import { CirculoVipBoasVindas } from './screens/CirculoVipBoasVindas';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="bg-purple">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="circulo-vip" element={<CirculoVip />} />
          <Route path="circulo-vip/boas-vindas" element={<CirculoVipBoasVindas />} />
          <Route path="/" element={<CirculoVip />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
