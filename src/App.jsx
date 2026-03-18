// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import Home from "./pages/home/Home";
// import ContactSection from "./pages/contact/ContactSection";
// import About from "./pages/about/About";
// import Suppliers from "./pages/suppliers/Suppliers";
// import Catalog from "./pages/catalog/Catalog";
// import Buys from "./pages/buys/Buys";
// import NewsPage from "./pages/newsPage/NewsPage";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/contact" element={<ContactSection />} />
//           <Route path="/catalog" element={<Catalog />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/supplier" element={<Suppliers />} />
//           <Route path="/buys" element={<Buys />} />
//           <Route path="/news" element={<NewsPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leazy from "./components/leazy/Leazy";

const Layout = lazy(() => import("./components/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const ContactSection = lazy(() => import("./pages/contact/ContactSection"));
const About = lazy(() => import("./pages/about/About"));
const Suppliers = lazy(() => import("./pages/suppliers/Suppliers"));
const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const Buys = lazy(() => import("./pages/buys/Buys"));
const NewsPage = lazy(() => import("./pages/newsPage/NewsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Leazy />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactSection />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="about" element={<About />} />
            <Route path="supplier" element={<Suppliers />} />
            <Route path="buys" element={<Buys />} />
            <Route path="news" element={<NewsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
