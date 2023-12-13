import BannerSection from "../components/BannerSection";
import DevicesSection from "../components/DevicesSection";
import TVSection from "../components/TVSection";

const root = () => {
  return (
    <main className="bg-[rgb(35,35,35,35)]">
      <BannerSection />
      <TVSection />
      <DevicesSection />
    </main>
  );
};

export default root;
