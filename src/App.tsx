import { BrowserRouter, Route, Routes } from 'react-router';
import { CirculoVip } from './screens/CirculoVip';
import { CirculoVipBoasVindas } from './screens/CirculoVipBoasVindas';
import { Footer, Header } from './components';
import './index.css';

function App() {
  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');

  if (prefersLightTheme.matches) {
    const favicon = document.querySelector("link[rel~='icon']");
    favicon?.setAttribute('href', '/favicon-light.png');
  }
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
