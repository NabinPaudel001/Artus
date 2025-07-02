import AnimatedAnchor from "@/components/AnimatedAnchor";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Feature } from "@/types";

const FeaturesStickyLayout = ({ sticky = true }: { sticky?: boolean }) => {
  const features = getListPage("sections/features.md").frontmatter;

  return (
    <section className="section">
      <div className="container">
        {features?.map((item: Feature["frontmatter"], mindex: number) => {
          const { title, description, list, images, button } = item;
          const isEven = mindex % 2 === 0;

          return (
            <div
              key={mindex}
              className={`overflow-hidden rounded-3xl border border-border bg-primary ${
                !sticky
                  ? `mb-10 last:mb-0`
                  : `max-lg:mb-10 max-lg:last:mb-0 lg:sticky lg:top-[25px]`
              }`}
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Section */}
                <div className="lg:w-1/2" data-aos="fade-up-sm">
                  <div className="min-h-full rounded-s-3xl py-8 pl-5 pr-4 md:py-16 md:pl-10 md:pr-9 lg:py-36 lg:px-20">
                    {title && (
                      <h2
                        className="has-gradient mb-6"
                        data-aos="fade-up-sm"
                        dangerouslySetInnerHTML={markdownify(title)}
                      />
                    )}
                    {description && (
                      <p
                        className="text-lg/[inherit] opacity-80"
                        data-aos="fade-up-sm"
                        data-aos-delay="100"
                        dangerouslySetInnerHTML={markdownify(description)}
                      />
                    )}
                    {list && (
                      <ul className="mt-10 columns-1 md:columns-2 lg:mt-20">
                        {list.map((item, i: number) => (
                          <li
                            className="mb-3 text-lg/[inherit] font-medium"
                            key={i}
                          >
                            <DynamicIcon
                              icon="FaCheck"
                              className="text-red-700 -mt-px inline-block mr-2.5 text-base"
                            />
                            <span dangerouslySetInnerHTML={markdownify(item)} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {button && button.enable && (
                      <AnimatedAnchor
                        label={button.label}
                        link={button.link}
                        className="btn-primary mt-6 md:mt-10"
                      />
                    )}
                  </div>
                </div>

{/* Image Section */}
<div className="lg:w-1/2">
  <div className="rounded-3xl bg-body">
    <div className="flex min-h-full items-center">
      <div
        className="relative w-[90%] py-10 lg:py-20 mx-auto"
        data-aos="fade-up-sm"
        data-aos-delay="250"
      >
        {images?.[0] && (
          <ImageFallback
            src={images[0]}
            alt={title}
            className=" relative z-10 w-full h-auto"
            width={800}
            height={450}
          />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-px left-2/4 z-0 h-[353px] w-[509px] flex-none -translate-x-2/4 rotate-[-19deg] rounded-full from-secondary/40 via-secondary via-60% to-primary opacity-60 blur-[207px] bg-gradient-to-tr"
        />
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesStickyLayout;
