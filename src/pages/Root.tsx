import AppSection from "../components/AppSection";
import BannerSection from "../components/BannerSection";
import DevicesSection from "../components/DevicesSection";
import KidSection from "../components/KidSection";
import QuestionSection from "../components/QuestionSection";
import TVSection from "../components/TVSection";

const root = () => {
  return (
    <main className="bg-[rgb(35,35,35,35)]">
      <BannerSection />
      <TVSection />
      <DevicesSection />
      <KidSection />
      <AppSection />
      <QuestionSection />
    </main>
  );
};

export default root;
