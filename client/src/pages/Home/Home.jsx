import Hero from "../../components/home/Hero";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import MainLayout from "../../layouts/MainLayout";
import SearchSection from "../../components/home/SearchSection";
import StatsSection from "../../components/home/Statistics";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import FeaturedLocations from "../../components/home/FeaturedLocations";
import Testimonials from "../../components/home/Testimonials";
import CTASection from "../../components/home/CTASection";

function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <SearchSection />
        <FeaturedProperties />
        <StatsSection />
        <WhyChooseUs />
        <FeaturedLocations />
        <Testimonials />
        <CTASection />
      </MainLayout>
    </>
  );
}

export default Home;