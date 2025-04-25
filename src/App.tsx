import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";
import ProductSection from "./components/home/ProductSection";
import CategorySection from "./components/home/CategorySection";
import TrendSection from "./components/home/TrendSection";
import MembershipSection from "./components/home/MembershipSection";
import PlayerSearchPage from "./components/players/PlayerSearchPage";

function App() {
  // Tennis products data
  const tennisProducts = [
    {
      image:
        "https://images.pexels.com/photos/5739074/pexels-photo-5739074.jpeg",
      title: "Professional Tennis Rackets",
      description:
        "Premium carbon fiber construction for maximum power and control.",
      ctaText: "View Collection",
    },
    {
      image:
        "https://images.pexels.com/photos/5739111/pexels-photo-5739111.jpeg",
      title: "Tennis Court Shoes",
      description: "Designed for quick lateral movements and court grip.",
      ctaText: "Shop Now",
    },
    {
      image:
        "https://images.pexels.com/photos/5739125/pexels-photo-5739125.jpeg",
      title: "Performance Tennis Apparel",
      description: "Lightweight, breathable fabrics for optimal performance.",
      ctaText: "Explore",
    },
  ];

  // Badminton products data
  const badmintonProducts = [
    {
      image:
        "https://images.pexels.com/photos/5739134/pexels-photo-5739134.jpeg",
      title: "Elite Badminton Rackets",
      description:
        "Ultra-lightweight design for swift smashes and precise control.",
      ctaText: "View Collection",
    },
    {
      image:
        "https://images.pexels.com/photos/5739145/pexels-photo-5739145.jpeg",
      title: "Badminton Court Shoes",
      description: "Perfect grip and cushioning for indoor courts.",
      ctaText: "Shop Now",
    },
    {
      image:
        "https://images.pexels.com/photos/5739155/pexels-photo-5739155.jpeg",
      title: "Professional Badminton Gear",
      description: "Complete your game with our premium accessories.",
      ctaText: "Explore",
    },
  ];

  // Sports categories data
  const sportsCategories = [
    {
      image:
        "https://images.pexels.com/photos/5739165/pexels-photo-5739165.jpeg",
      title: "Tennis",
      description: "Professional tennis equipment and apparel.",
    },
    {
      image:
        "https://images.pexels.com/photos/5739175/pexels-photo-5739175.jpeg",
      title: "Badminton",
      description: "Premium badminton gear for all skill levels.",
    },
    {
      image:
        "https://images.pexels.com/photos/5739185/pexels-photo-5739185.jpeg",
      title: "Training",
      description: "Essential training equipment and accessories.",
    },
  ];

  // Trend data
  const trends = [
    {
      image:
        "https://images.pexels.com/photos/5739195/pexels-photo-5739195.jpeg",
      title: "Summer Collection",
      description: "New arrivals for the season.",
    },
    {
      image:
        "https://images.pexels.com/photos/5739205/pexels-photo-5739205.jpeg",
      title: "Pro Series",
      description: "Equipment used by professional players.",
    },
  ];

  // Home page component
  const HomePage = () => (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductSection title="Tennis" products={tennisProducts} />
      <ProductSection title="Badminton" products={badmintonProducts} />
      <CategorySection title="Shop by Sport" categories={sportsCategories} />
      <TrendSection trends={trends} />
      <MembershipSection />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/players" element={<PlayerSearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
