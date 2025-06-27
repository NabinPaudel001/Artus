import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const AboutBanner = () => {
  const { title, description, image } = getListPage(
    "sections/about-banner.md",
  ).frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="lg:col-6" data-aos="fade-up-sm">
            {title && (
              <h1
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
          </div>
          <div
            className="lg:col-6 lg:pl-20"
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
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            {image && (
              <ImageFallback
                className="h-[300px] min-h-full w-full rounded-lg object-cover md:h-[700px] md:rounded-3xl"
                src={image}
                alt={`image related to ${title || ""}`}
                width={700}
                height={300}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
