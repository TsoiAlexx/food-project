import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Notfound } from './pages/Notfound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
    return (
        <>
            <Header />
            <main className="container content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about/" element={<About />} />
                    <Route path="contacts/" element={<Contact />} />
                    <Route path="category/:name" element={<Category />} />
                    <Route path="recipe/:id" element={<Recipe />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
