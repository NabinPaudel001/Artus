import CompanySelector from "@/components/CompanySelector";
import CallToAction1 from "@/partials/CallToAction1";
import CustomersLogo from "@/partials/CustomersLogo";
import FeaturesCardLayout from "@/partials/FeaturesCardLayout";
import FeaturesStickyLayout from "@/partials/FeaturesStickyLayout";
import HomeBanner from "@/partials/HomeBanner";
import IntegrationSection from "@/partials/IntegrationSection";
import SeoMeta from "@/partials/SeoMeta";
import Testimonial from "@/partials/Testimonial";

export default function Home() {
  return (
    <>
      <SeoMeta />
      <CompanySelector /> {/* Client component with interactivity */}
      <div id="home-content" style={{ opacity: 1 /* or control via client component */ }}>
        <HomeBanner />
        <CustomersLogo />
        <FeaturesStickyLayout />
        <FeaturesCardLayout />
        <IntegrationSection />
        <Testimonial featuredCustomer="David Miller" />
        <CallToAction1 />
      </div>
    </>
  );
}
