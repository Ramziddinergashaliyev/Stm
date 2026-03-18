import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ContactSection from "./pages/contact/ContactSection";
import About from "./pages/about/About";
import Suppliers from "./pages/suppliers/Suppliers";
import Catalog from "./pages/catalog/Catalog";
import Buys from "./pages/buys/Buys";
import NewsPage from "./pages/newsPage/NewsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/supplier" element={<Suppliers />} />
          <Route path="/buys" element={<Buys />} />
          <Route path="/news" element={<NewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
