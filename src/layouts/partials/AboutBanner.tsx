
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const AboutBanner = () => {
  const { title, description} = getListPage(
    "sections/about-banner.md",
  ).frontmatter;

  return (
    <section className="section" id="about-banner">
      <div className="container">
        <div className="row">
          <div className="lg:col-4" data-aos="fade-up-sm">
            {title && (
              <h1
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
          </div>
          <div
            className="lg:col-7 lg:pl-0"
            data-aos="fade-up-sm"
            data-aos-delay="100"
          >
            {description && (
              <div
                className="content [&>p:last-child]:text-base [&>p:last-child]:opacity-80"
                dangerouslySetInnerHTML={markdownify(description, true)}
              />
            )}
          </div>
   
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
