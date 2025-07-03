import ImageFallback from "@/helpers/ImageFallback";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const IntegrationCardLayout = () => {
  const { title, description } = getListPage("sections/integration.md").frontmatter;
  const list = getSinglePage("integration") || [];

  const isValidSrc = (src?: string) => typeof src === "string" && src.trim() !== "";

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
            {title && <h2 className="has-gradient" dangerouslySetInnerHTML={markdownify(title)} />}
            {description && (
              <p className="mt-6 text-lg/[inherit] opacity-80" dangerouslySetInnerHTML={markdownify(description)} />
            )}
          </div>

          <div className="col-12 pt-20 relative">
            <div className="row g-4 justify-center">
              {list.map(({ frontmatter, slug }, index) => (
                <div
                  key={slug}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                >
                  <div className="group relative min-h-full overflow-hidden rounded-lg border border-white/5 bg-dark p-9 duration-300 hover:-translate-y-1">
                    <div className="relative z-20 mb-6 flex items-center gap-4">
                      {isValidSrc(frontmatter.image) && (
                        <ImageFallback
                          className="h-[70px] w-[70px] object-cover transition duration-300 group-hover:scale-90"
                          src={frontmatter.image}
                          alt={`icon related to ${frontmatter.title}`}
                          width={70}
                          height={70}
                        />
                      )}
                      <div>
                        {frontmatter.title && (
                          <h3
                            className="tracking-none mb-1 text-xl/snug font-semibold"
                            dangerouslySetInnerHTML={markdownify(frontmatter.title)}
                          />
                        )}
                        {frontmatter.type && (
                          <p
                            className="tracking-none mt-0 opacity-70"
                            dangerouslySetInnerHTML={markdownify(frontmatter.type)}
                          />
                        )}
                      </div>
                    </div>
                    {frontmatter.description && (
                      <p className="opacity-80" dangerouslySetInnerHTML={markdownify(frontmatter.description)} />
                    )}

                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-secondary opacity-0 blur-[83px] transition-opacity duration-300 bg-gradient-to-l group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="rotate-animation pointer-events-none absolute -right-10 top-0 -z-10 h-80 w-[550px] -translate-x-2/4 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-30 blur-[120px] bg-gradient-to-l"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationCardLayout;
