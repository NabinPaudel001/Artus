import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const HomeBanner = () => {
  const { title, note, description, buttons} = getListPage(
    "sections/home-banner.md",
  ).frontmatter;
  return (
    <section className="overflow-hidden pb-0 pt-16 relative">
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
            {description && (
              <p
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                className="mb-8 text-xl/[inherit] text-light"
              />
            )}
             {note && (
              <div
                data-aos="fade-up-sm"
                className="border-animation mx-auto mb-4 w-fit rounded-full p-px relative"
              >
                <div className="border-animation-inner flex gap-2 rounded-full border border-white/15 px-3 py-1.5">
                  <ImageFallback
                    width={24}
                    height={24}
                    src="/images/icons/svg/award.svg"
                    alt="note"
                  />
                  <span
                    className="text-sm opacity-70 md:text-base"
                    dangerouslySetInnerHTML={markdownify(note)}
                  />
                </div>
              </div>
            )}

            {buttons && (
              <ul className="flex flex-wrap justify-center gap-4">
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-30 blur-[100px] bg-gradient-to-tr md:top-1/3"
      />
    </section>
  );
};

export default HomeBanner;
