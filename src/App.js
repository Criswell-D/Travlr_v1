import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MealsPage from './components/MealsPage';
import NewsPage from './components/NewsPage';
import RoomsPage from './components/RoomsPage';
import TravelPage from './components/TravelPage';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/trips' element={<TravelPage />} />
          <Route path='/rooms' element={<RoomsPage />} />
          <Route path='/meals' element={<MealsPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
