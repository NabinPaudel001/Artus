import TeamCard from "@/components/TeamCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Team } from "@/types";
import React from "react";

const OurTeam = () => {
  const { title, description, list } = getListPage("sections/our-team.md").frontmatter;

  return (
    <section className="section" id="team">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-10" data-aos="fade-up-sm">
          {title && (
            <h2
              className="has-gradient mb-4 text-center text-3xl font-semibold"
              dangerouslySetInnerHTML={markdownify(title)}
            />
          )}
          {description && (
            <p
              className="text-center text-lg opacity-80"
              dangerouslySetInnerHTML={markdownify(description)}
            />
          )}
        </div>

        {/* Grid for team members */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-20"
          data-aos="fade-up-sm"
          data-aos-delay="200"
        >
          {list?.map((item: Team & { education?: string }, i: number) => (
            <TeamCard key={i} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
