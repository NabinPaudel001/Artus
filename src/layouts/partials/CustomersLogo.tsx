import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CustomersLogo = () => {
  const { title, list } = getListPage("sections/customers-logo.md").frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up-sm">
            <div className="text-center sm:flex">
              <p
                className="w-full pb-3 text-center text-2xl/snug font-medium tracking-wide sm:whitespace-nowrap sm:pb-0"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            </div>
          </div>
          <div
            className="col-12 pt-14"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="relative flex gap-x-10 overflow-hidden before:pointer-events-none before:absolute before:left-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-body before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:right-0 after:h-full after:w-20 after:bg-gradient-to-r after:from-transparent after:to-body after:content-[''] md:gap-x-20 before:md:w-40 after:md:w-40">
              <div className="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-60 md:gap-x-20">
                {list?.map((logo: string, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo}
                      className="h-full object-contain"
                      alt="brand logo"
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
              <div
                className="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-60 md:gap-x-20"
                aria-hidden="true"
              >
                {list?.map((logo: string, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo}
                      className="h-full object-contain"
                      alt="brand logo"
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="" />
      </div>
    </section>
  );
};

export default CustomersLogo;
