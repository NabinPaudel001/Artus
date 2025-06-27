import AnimatedAnchor from "@/components/AnimatedAnchor";

import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const HomeBanner = () => {
  const { title, buttons} = getListPage(
    "sections/home-banner.md",
  ).frontmatter;
  return (
    <section className="mt-8 overflow-hidden pb-0 pt-16 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="pt-0 text-center md:col-9 lg:col-9">
           
            {title && (
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
                className="has-gradient mb-4 text-h2 lg:text-h1"
              />
            )}
            

            {buttons && (
              <ul className="mt-15 flex flex-wrap justify-center gap-4 mb-2">
                {buttons.map(
                  (
                    { label, link }: { label: string; link: string },
                    index: number,
                  ) => (
                    <li
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + index * 50}
                    >
                      <AnimatedAnchor
                        className={`${index === 0 ? "btn-primary" : "btn-outline-transparent"}`}
                        link={link}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener"
                        label={label}
                        hideIcon={!(index === 0)}
                      />
                    </li>
                  ),
                )}
              </ul>
            )}
          
          </div>
         
        </div>
      </div>
     
    </section>
  );
};

export default HomeBanner;
