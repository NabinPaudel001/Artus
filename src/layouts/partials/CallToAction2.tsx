import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CallToAction2 = () => {
  const { enable, title, bg_image, description, button, list } = getListPage(
    "sections/call-to-action-2.md",
  ).frontmatter;
  return (
    <>
      {enable && (
        <section className="section">
          <div className="container">
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-dark/60 py-40">
              <div aria-hidden="true">
                <ImageFallback
                  className="absolute bottom-0 z-0 h-full w-full"
                  src={bg_image}
                  alt="background pattern image"
                  width={1920}
                  height={1080}
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              >
                {/* User Image 01 */}
                <div className="absolute left-[9%] top-[12%] w-fit">
                  {list && list[0] && list[0].image ? (
                    <div className="ml-1 h-12 w-12 overflow-hidden md:h-20 md:w-20">
                      <ImageFallback
                        src={list[0].image}
                        className="h-full w-full object-cover"
                        alt="user image"
                        width={80}
                        height={80}
                      />
                    </div>
                  ) : (
                    list &&
                    list[0].icon && (
                      <div className="relative z-10 -mt-4 ml-0 h-12 w-12 overflow-hidden rounded-full via-inherit p-px after:absolute after:inset-0 after:-z-10 after:from-white/10 after:to-white/40 after:content-[''] after:bg-gradient-to-br md:h-20 md:w-20">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-dark object-cover">
                          <ImageFallback
                            src={list[0].icon}
                            className="h-1/2 w-1/2"
                            alt="user image"
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    )
                  )}

                  <ImageFallback
                    src="/images/call-to-action/pattern-1.png"
                    className="max-md:w-40"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </div>
                {/* User Image 02 */}
                <div className="absolute -top-2 left-[38%] w-fit pl-2">
                  {list && list[1] && list[1].image ? (
                    <div className="h-12 w-12 overflow-hidden md:h-16 md:w-16">
                      <ImageFallback
                        src={list[1].image}
                        className="h-full w-full object-cover"
                        alt="user image"
                        width={80}
                        height={80}
                      />
                    </div>
                  ) : (
                    list &&
                    list[1].icon && (
                      <div className="relative z-10 -mt-4 ml-0 h-12 w-12 overflow-hidden rounded-full via-inherit p-px after:absolute after:inset-0 after:-z-10 after:from-white/10 after:to-white/40 after:content-[''] after:bg-gradient-to-br md:h-20 md:w-20">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-dark object-cover">
                          <ImageFallback
                            src={list[1].icon}
                            className="h-1/2 w-1/2"
                            alt="user image"
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    )
                  )}
                  <ImageFallback
                    src="/images/call-to-action/pattern-2.png"
                    className="max-md:w-24"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </div>
                {/* Icon 03 */}
                <div className="absolute right-[12%] top-[10%] flex w-fit items-center">
                  <ImageFallback
                    src="/images/call-to-action/pattern-3.png"
                    className="max-md:w-40"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                  {list && list[2] && list[2].image ? (
                    <div className="h-12 w-12 overflow-hidden md:h-20 md:w-20">
                      <ImageFallback
                        src={list[2].image}
                        className="h-full w-full object-cover"
                        alt="user image"
                        width={80}
                        height={80}
                      />
                    </div>
                  ) : (
                    list &&
                    list[2].icon && (
                      <div className="relative z-10 -mt-4 ml-0 h-12 w-12 overflow-hidden rounded-full via-inherit p-px after:absolute after:inset-0 after:-z-10 after:from-white/10 after:to-white/40 after:content-[''] after:bg-gradient-to-br md:h-20 md:w-20">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-dark object-cover">
                          <ImageFallback
                            src={list[2].icon}
                            className="h-1/2 w-1/2"
                            alt="user image"
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
                {/* User Image 04 */}
                <div className="absolute right-[9%] top-[70%] w-fit md:top-[48%]">
                  <ImageFallback
                    src="/images/call-to-action/pattern-4.png"
                    className="max-md:w-40"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                  {list && list[3] && list[3].image ? (
                    <div className="ml-auto h-12 w-12 overflow-hidden md:h-16 md:w-16">
                      <ImageFallback
                        src={list[3].image}
                        className="h-full w-full object-cover"
                        alt="user image"
                        width={80}
                        height={80}
                      />
                    </div>
                  ) : (
                    list &&
                    list[3].icon && (
                      <div className="relative z-10 -mt-4 ml-auto h-12 w-12 overflow-hidden rounded-full via-inherit p-px after:absolute after:inset-0 after:-z-10 after:from-white/10 after:to-white/40 after:content-[''] after:bg-gradient-to-br md:h-16 md:w-16">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-dark object-cover">
                          <ImageFallback
                            src={list[3].icon}
                            className="h-1/2 w-1/2"
                            alt="user image"
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
                {/* Icon 05 */}
                <div className="absolute bottom-[-3%] right-[28%]">
                  <ImageFallback
                    src="/images/call-to-action/pattern-5.png"
                    className="max-md:w-40"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                  {list && list[4] && list[4].image ? (
                    <div className="ml-auto h-12 w-12 overflow-hidden md:h-16 md:w-16">
                      <ImageFallback
                        src={list[4].image}
                        className="h-full w-full object-cover"
                        alt="user image"
                        width={80}
                        height={80}
                      />
                    </div>
                  ) : (
                    list &&
                    list[4].icon && (
                      <div className="relative z-10 -mt-4 ml-auto h-12 w-12 overflow-hidden rounded-full via-inherit p-px after:absolute after:inset-0 after:-z-10 after:from-white/10 after:to-white/40 after:content-[''] after:bg-gradient-to-br md:h-16 md:w-16">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-dark object-cover">
                          <ImageFallback
                            src={list[4].icon}
                            className="h-1/2 w-1/2"
                            alt="user image"
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
                {/* Icon 06 */}
                <div className="absolute bottom-[2%] left-[14%] flex items-center">
                  {list && list[5] && list[5].image ? (
                    <div className="ml-auto h-12 w-12 overflow-hidden md:h-20 md:w-20">
                      <ImageFallback
                        src={list[5].image}
                        className="h-full w-full object-cover"
                        alt="user image"
                        width={80}
                        height={80}
                      />
                    </div>
                  ) : (
                    list &&
                    list[5].icon && (
                      <div className="relative z-10 -mt-4 ml-auto h-12 w-12 overflow-hidden rounded-full via-inherit p-px after:absolute after:inset-0 after:-z-10 after:from-white/10 after:to-white/40 after:content-[''] after:bg-gradient-to-br md:h-20 md:w-20">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-dark object-cover">
                          <ImageFallback
                            src={list[5].icon}
                            className="h-1/2 w-1/2"
                            alt="user image"
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    )
                  )}
                  <ImageFallback
                    src="/images/call-to-action/pattern-6.png"
                    className="mb-10 max-md:w-40"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="row relative z-10 px-5 lg:gy-0 md:px-10">
                <div className="mx-auto text-center lg:col-6">
                  <h2
                    dangerouslySetInnerHTML={markdownify(title)}
                    className="has-gradient mb-4"
                    data-aos="fade-up-sm"
                  />
                  <div data-aos="fade-up-sm" data-aos-delay="50">
                    <p
                      dangerouslySetInnerHTML={markdownify(description)}
                      className="text-lg/[inherit] opacity-50"
                    />
                  </div>
                  {button && button.enable && (
                    <AnimatedAnchor
                      className="btn-primary mt-10"
                      link={button.link}
                      label={button.label}
                      data-aos="fade-up-sm"
                      data-aos-delay="150"
                    />
                  )}
                </div>
              </div>
              {/* Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-0 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-30 blur-[100px] bg-gradient-to-tr"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction2;
