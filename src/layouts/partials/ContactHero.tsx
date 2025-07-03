import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { RegularPage } from "@/types";

const ContactHero = () => {
  const { hero }: { hero: RegularPage["frontmatter"]["hero"] } =
    getListPage("contact/_index.md").frontmatter;
  return (
    <>
      {hero && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div
                className="mx-auto text-center lg:col-8 xl:col-6"
                data-aos="fade-up-sm"
              >
                {hero.title && (
                  <h1
                    className="has-gradient"
                    dangerouslySetInnerHTML={markdownify(hero.title)}
                  />
                )}
                {hero?.description && (
                  <p
                    className="mt-6 text-lg/[inherit] opacity-80 mb-5"
                    dangerouslySetInnerHTML={markdownify(hero.description)}
                  />
                )}
              </div>
             
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactHero;
