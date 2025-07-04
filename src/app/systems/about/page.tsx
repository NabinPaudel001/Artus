import Script from "next/script";
import { getListPage } from "@/lib/contentParser";
import AboutBanner from "@/partials/AboutBanner";
import CareerCta from "@/partials/CareerCta";
import OurTeam from "@/partials/OurTeam";
import SeoMeta from "@/partials/SeoMeta";
import Values from "@/partials/Values";
import { RegularPage } from "@/types";
import OurTechStack from "@/partials/OurTechStack";
import PreferredStack from "@/partials/PrefferedStack";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");

  return (
    <>
      <SeoMeta {...data.frontmatter} />
      <AboutBanner />
      <Values />
      <OurTeam />
      <CareerCta />
      <OurTechStack />
      <PreferredStack />

      {/* Scroll script to handle #team navigation after hydration */}
      <Script id="scroll-to-team" strategy="afterInteractive">
        {`
          (function scrollToTeamSection() {
            const hash = window.location.hash;
            if (hash === '#team') {
              let attempts = 0;
              const tryScroll = () => {
                const el = document.getElementById('team');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (attempts < 20) {
                  attempts++;
                  setTimeout(tryScroll, 100);
                }
              };
              tryScroll();
            }
          })();

          window.addEventListener('hashchange', function () {
            if (window.location.hash === '#team') {
              const el = document.getElementById('team');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          });
        `}
      </Script>
    </>
  );
};

export default About;
