import React from "react";
import Hero from "../../components/hero/Hero";
import CategoriesSection from "../../components/categories/CategoriesSection";
import FeaturesSection from "../../components/features/FeaturesSection";
import Brands from "../../components/brands/Brands";
import Original from "../../components/original/Original";
import News from "../../components/news/News";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <FeaturesSection />
      <Brands/>
      <Original/>
      <News/>
    </div>
  );
};

export default Home;
