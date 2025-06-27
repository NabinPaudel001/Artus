import AnimatedAnchor from "@/components/AnimatedAnchor";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CareerCta = () => {
  const { title, description, button } = getListPage(
    "sections/career-cta.md",
  ).frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
            {title && (
              <h2
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
            {button && (
              <AnimatedAnchor
                className="btn-primary mt-6"
                link={button.link}
                label={button.label}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCta;
