import { getListPage } from "@/lib/contentParser";
import CompanySelector from "@/components/CompanySelector";
import CustomersLogo from "@/partials/CustomersLogo";
import FeaturesCardLayout from "@/partials/FeaturesCardLayout";
import FeaturesStickyLayout from "@/partials/FeaturesStickyLayout";
import HomeBanner from "@/partials/HomeBanner";
import IntegrationSection from "@/partials/IntegrationSection";
import SeoMeta from "@/partials/SeoMeta";

export default function Home() {
  const { frontmatter } = getListPage("sections/customers-logo.md");

  return (
    <>
      <SeoMeta />
      <CompanySelector />
      <div id="home-content" style={{ opacity: 1 }}>
        <HomeBanner />
        <CustomersLogo frontmatter={frontmatter} /> 
        <FeaturesStickyLayout />
        <FeaturesCardLayout />
        <IntegrationSection />
      </div>
    </>
  );
}
