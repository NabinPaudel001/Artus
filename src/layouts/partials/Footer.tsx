import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";

const Footer = () => {
  const { footer, company, product, resources, services } = menu;

  // Function to replace {year} this from string to year
  function replaceYear(text: string) {
    const year = new Date().getFullYear();

    return text.replace("{year}", year.toString());
  }

  return (
    <footer className="py-10 md:py-16 xl:py-24">
      <div className="container" data-aos="fade-up-sm">
        <div className="row gy-6 justify-between lg:g-4">
          <div className="col-12 pb-7 md:pb-14">
            <Logo footerLogo={true} />
          </div>
          <div className="sm:col-6 md:col-auto">
            <h3 className="mb-8 text-base tracking-none text-white/50">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((item, i) => (
                <li key={`${item.name}-${i}`}>
                  <a
                    className="font-medium transition text-text/90 hover:text-text/60"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-6 md:col-auto">
            <h3 className="mb-8 text-base tracking-none text-white/50">
              Product
            </h3>
            <ul className="flex flex-col gap-3">
              {product.map((item, i) => (
                <li key={`${item.name}-${i}`}>
                  <a
                    className="font-medium transition text-text/90 hover:text-text/60"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-6 md:col-auto">
            <h3 className="mb-8 text-base tracking-none text-white/50">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {resources.map((item, i) => (
                <li key={`${item.name}-${i}`}>
                  <a
                    className="font-medium transition text-text/90 hover:text-text/60"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-6 md:col-auto">
            <h3 className="mb-8 text-base tracking-none text-white/50">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((item, i) => (
                <li key={`${item.name}-${i}`}>
                  <a
                    className="font-medium transition text-text/90 hover:text-text/60"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 pt-5 md:pt-20">
            <div className="flex flex-col md:flex-row justify-between border-t border-border pt-10 pb-5">
              {config.params.copyright && (
                <div>
                  <p className="text-sm text-white/60">
                    {replaceYear(config.params.copyright)}
                  </p>
                </div>
              )}
              {
                <div>
                  <ul className="flex md:justify-end gap-4">
                    {footer?.map((item, i) => (
                      <li key={`${item.name}-${i}`}>
                        <a
                          className="text-sm text-white/60 transition hover:text-secondary"
                          href={item.url}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
