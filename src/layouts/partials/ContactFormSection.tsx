import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { RegularPage } from "@/types";

const ContactFormSection = () => {
  const { contact_form_action } = config.params;
  const {
    contact_form,
  }: { contact_form: RegularPage["frontmatter"]["contact_form"] } =
    getListPage("contact/_index.md").frontmatter;

  return (
    <section className="section">
      <div className="container relative">
        <div className="row gy-5 items-start" data-aos="fade-left-sm">
          {/* Left Column: Title and Contact Info */}
          <div className="lg:col-5">
            {contact_form?.title && (
              <h2
                className="has-gradient mb-8"
                dangerouslySetInnerHTML={markdownify(contact_form.title)}
              />
            )}

            {contact_form?.list && (
              <div className="flex flex-col gap-6 md:gap-8">
                {contact_form.list.map(
                  (
                    point: {
                      icon: string;
                      title: string;
                      description: string;
                    },
                    i: number,
                  ) => (
                    <div key={i} className="flex gap-4">
                      {point.icon && (
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-b from-white/10 to-slate-800/25">
                          <ImageFallback
                            className="h-5 w-5"
                            src={point.icon}
                            alt={`icon related to ${point.title}`}
                            width={28}
                            height={28}
                          />
                        </div>
                      )}
                      <div>
                        {point.title && (
                          <h3
                            className="tracking-none mb-2 text-lg/none"
                            dangerouslySetInnerHTML={markdownify(point.title)}
                          />
                        )}
                        {point.description && (
                          <p
                            className="text-lg/none opacity-70"
                            dangerouslySetInnerHTML={markdownify(
                              point.description,
                            )}
                          />
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-7 lg:ps-16" data-aos-delay="200">
            <div className="rounded-2xl border border-white/5 bg-dark p-5 md:p-16">
              <form
                className="grid grid-cols-1 gap-6"
                action={contact_form_action}
                method="post"
              >
                <div>
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input w-full"
                    required
                    type="text"
                    placeholder="YOUR NAME*"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input w-full"
                    required
                    type="email"
                    placeholder="YOUR EMAIL*"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="form-label">
                    Your Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="form-input w-full"
                    type="text"
                    placeholder="COMPANY NAME"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="form-label">
                    Choose a service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="form-input w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10"
                    required
                  >
                    <option className="bg-dark text-white dark:bg-dark dark:text-white border border-white/10" value="Application">APPLICATION DESIGN</option>
                    <option className="bg-dark text-white dark:bg-dark dark:text-white border border-white/10" value="web">Web Development</option>
                    <option className="bg-dark text-white dark:bg-dark dark:text-white border border-white/10" value="mobile">Mobile App Development</option>
                    <option className="bg-dark text-white dark:bg-dark dark:text-white border border-white/10" value="uiux">UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="form-label">
                    What is your estimate budget?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-input w-full"
                    required
                  >
                    <option className="bg-dark text-white dark:bg-dark dark:text-white border border-white/10" value="under100k">Under 100k</option>
                    <option className="bg-dark text-white dark:bg-dark dark:text-white border border-white/10" value="under500k">Under 500K</option>
                    <option className="bg-dark text-white dark:bg-dark dark:text-white border border-white/10" value="500kplus">500K+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Describe Your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input w-full"
                    rows={4}
                    placeholder="WRITE HERE"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-full border-border text-white"
                  >
                    <span className="value">
                      <span data-content="Send Message">Send Message</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-14 right-[15%] -z-10 h-[358px] w-[816px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-20 blur-[100px] bg-gradient-to-tr lg:opacity-40"
        />
      </div>
    </section>
  );
};

export default ContactFormSection;
