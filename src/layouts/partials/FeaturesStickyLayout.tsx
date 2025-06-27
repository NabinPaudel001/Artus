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

          return (
            <div
              key={mindex}
              className={`overflow-hidden rounded-3xl border border-border bg-primary ${!sticky ? `mb-10 last:mb-0 ` : `max-lg:mb-10 max-lg:last:mb-0 lg:sticky ` + (mindex === 1 ? "lg:top-[160px]" : "lg:top-[120px]")}`}
            >
              <div className="row">
                <div className="lg:col-6" data-aos="fade-up-sm">
                  <div className="min-h-full rounded-s-3xl py-8 pl-5 pr-4 md:py-16 md:pl-10 md:pr-9 lg:py-36 lg:pl-20 lg:pr-[70px]">
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
                              className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
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
                <div className="lg:col-6">
                  <div className="rounded-3xl bg-body lg:pl-5">
                    <div className="flex min-h-full items-center px-5 md:justify-center md:px-10">
                      <div
                        className="relative py-10 md:w-[60%] lg:w-auto lg:py-20"
                        data-aos="fade-up-sm"
                        data-aos-delay="250"
                      >
                        {images?.map((item, index: number) => {
                          // Add classes based on every row index number to first & second image
                          const getClass = (mindex: number, index: number) => {
                            switch (mindex) {
                              case 0:
                                return index === 0 ? "w-full" : "w-[60%] mt-6";
                              case 1:
                                return index === 0
                                  ? "w-[76%] "
                                  : "w-[70%] ml-[24%] mt-[-12%]";
                              case 2:
                                return index === 0
                                  ? "w-[70%] mx-auto"
                                  : "w-[55%] ml-6 mt-[-20%]";
                              default:
                                return index === 0
                                  ? "w-[76%] "
                                  : "w-[70%] ml-[24%] mt-[-12%]";
                            }
                          };

                          return (
                            <ImageFallback
                              src={item}
                              alt={title}
                              className={`relative z-10 ${getClass(mindex, index)}`}
                              key={index}
                              width={500}
                              height={500}
                            />
                          );
                        })}
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
