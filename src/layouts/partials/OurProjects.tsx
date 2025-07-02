import ProjectCard from "./ProjectCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import React from "react";

interface Project {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  [key: string]: any;
}

const OurProjects = () => {
  const { title, description, list } = getListPage(
    "sections/our-projects.md"
  ).frontmatter;

  return (
    <>
      {/* Hero Text Section with AboutBanner-style title */}
      <section className="section text-center text-white py-28 px-4" data-aos="fade-down">
        <div className="container mx-auto max-w-4xl">
          {title && (
            <h1
              className="has-gradient mb-6"
              dangerouslySetInnerHTML={markdownify(title)}
            />
          )}
          {description && (
            <p
              className="text-xl opacity-80 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={markdownify(description)}
            />
          )}
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="section pt-20">
        <div className="container">
          <div className="row flex flex-col space-y-12" data-aos="fade-up-sm" data-aos-delay="200">
            {list?.map((item: Project, i: number) => (
              <ProjectCard key={i} data={item} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProjects;
