import TeamCard from "@/components/TeamCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Team } from "@/types";
import React from "react";

const OurTeam = () => {
  const { title, description, list } = getListPage(
    "sections/our-team.md",
  ).frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="lg:col-10" data-aos="fade-up-sm">
            {title && (
              <h2
                className="has-gradient mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row gx-4 gy-5">
              {list?.map((item: Team, i: number) => (
                <div className="lg:col-4" key={i}>
                  <TeamCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
