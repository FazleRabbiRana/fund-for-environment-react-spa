import './App.css';
import Header from './components/Header/Header';
import Donors from './components/Donors/Donors';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Donors />
      <Footer />
    </div>
  );
}

export default App;
