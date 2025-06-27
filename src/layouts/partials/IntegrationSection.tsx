import AnimatedAnchor from "@/components/AnimatedAnchor";
import IntegrationCard from "@/components/IntegrationCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

type IntegrationSectionProps = {
  largeHeading?: boolean;
  hideBackground?: boolean;
  fluidContainer?: boolean;
  hideHeadingOverlay?: boolean;
  hideCTAButton?: boolean;
};

const IntegrationSection = ({
  largeHeading,
  hideBackground,
  fluidContainer,
  hideHeadingOverlay,
  hideCTAButton,
}: IntegrationSectionProps) => {
  const { title, description, button } = getListPage(
    "sections/integration.md",
  ).frontmatter;

  const list = getSinglePage("integration");

  let firstList = list.slice(0, Math.floor(list.length / 2));
  firstList = [...firstList, ...firstList];
  let secondList = list.slice(Math.floor(list.length / 2), list.length);
  secondList = [...secondList, ...secondList];

  return (
    <section className="section overflow-hidden">
      {fluidContainer ? (
        <div className="container-fluid">
          <div
            className={`${!hideBackground && "overflow-hidden rounded-xl border border-border bg-body pt-10 md:pt-20"}`}
          >
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <div className="px-5 md:px-10">
                  {title && largeHeading ? (
                    <h1
                      className="has-gradient mb-6"
                      dangerouslySetInnerHTML={markdownify(title)}
                    />
                  ) : (
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

                  {!hideCTAButton && button && button.enable && (
                    <AnimatedAnchor
                      className="btn-primary mt-11"
                      link={button.link}
                      label={button.label}
                    />
                  )}

                  {!hideHeadingOverlay && (
                    <div
                      aria-hidden="true"
                      className="rotate-animation pointer-events-none absolute left-2/4 top-44 -z-10 h-80 w-[550px] -translate-x-2/4 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-60 blur-[120px] bg-gradient-to-l"
                    />
                  )}
                </div>
              </div>
              <div
                className="col-12 pt-20"
                data-aos="fade-up-sm"
                data-aos-delay={200}
              >
                <div className="marquee-wrapper flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5">
                    {firstList.map((item, index) => (
                      <IntegrationCard
                        key={`${item.frontmatter.title}-${index}`}
                        image={item.frontmatter.image}
                        name={item.frontmatter.title}
                      />
                    ))}
                  </div>
                  <div
                    className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {firstList.map((item, index) => (
                      <IntegrationCard
                        key={`${item.frontmatter.title}-${index}`}
                        image={item.frontmatter.image}
                        name={item.frontmatter.title}
                      />
                    ))}
                  </div>
                </div>
                <div className="marquee-wrapper mt-5 flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5">
                    {secondList.map(
                      ({ frontmatter: { title, image } }, i: number) => (
                        <IntegrationCard
                          key={`${title}-${i}`}
                          style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                          image={image}
                          name={title}
                        />
                      ),
                    )}
                  </div>
                  <div
                    className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {secondList.map(
                      ({ frontmatter: { title, image } }, i: number) => (
                        <IntegrationCard
                          key={`${title}-${i}`}
                          style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                          image={image}
                          name={title}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div
            className={`${!hideBackground && "overflow-hidden rounded-xl border border-border bg-body pt-10 md:pt-20"}`}
          >
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <div className="px-5 md:px-10">
                  {title && largeHeading ? (
                    <h1
                      className="has-gradient mb-6"
                      dangerouslySetInnerHTML={markdownify(title)}
                    />
                  ) : (
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

                  {button && button.enable && (
                    <AnimatedAnchor
                      className="btn-primary mt-11"
                      link={button.link}
                      label={button.label}
                    />
                  )}

                  <div
                    aria-hidden="true"
                    className="rotate-animation pointer-events-none absolute left-4/6 top-44 -z-10 h-80 w-[550px] -translate-x-1/2 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-60 blur-[120px] bg-gradient-to-l"
                  />
                </div>
              </div>
              <div
                className="col-12 pt-20"
                data-aos="fade-up-sm"
                data-aos-delay={200}
              >
                <div className="marquee-wrapper flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5">
                    {firstList.map(
                      ({ frontmatter: { title, image } }, i: number) => (
                        <IntegrationCard
                          key={`${title}-${i}`}
                          image={image}
                          name={title}
                        />
                      ),
                    )}
                  </div>
                  <div
                    className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {firstList.map(
                      ({ frontmatter: { title, image } }, i: number) => (
                        <IntegrationCard
                          key={`${title}-${i}`}
                          image={image}
                          name={title}
                        />
                      ),
                    )}
                  </div>
                </div>
                <div className="marquee-wrapper mt-5 flex gap-5 overflow-hidden">
                  <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5">
                    {secondList.map(
                      ({ frontmatter: { title, image } }, i: number) => (
                        <IntegrationCard
                          key={`${title}-${i}`}
                          style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                          image={image}
                          name={title}
                        />
                      ),
                    )}
                  </div>
                  <div
                    className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5"
                    aria-hidden="true"
                  >
                    {secondList.map(
                      ({ frontmatter: { title, image } }, i: number) => (
                        <IntegrationCard
                          key={`${title}-${i}`}
                          style={`${fluidContainer ? "rounded-xl" : "rounded-t-xl"}`}
                          image={image}
                          name={title}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntegrationSection;
