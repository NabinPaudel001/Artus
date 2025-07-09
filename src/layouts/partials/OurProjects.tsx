import React from "react";
import ProjectCard from "./ProjectCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

// Extended types
type TechItem = {
  name: string;
  icon: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
  category: string;
  domain?: string;
  year: string;
  techstack: {
    backend?: TechItem[];
    frontend?: TechItem[];
    app?: TechItem[];
    platform?: TechItem[];
    ml?: TechItem[]; // Added ML category
  };
};

const OurProjects = () => {
  const { title, description, list } = getListPage("sections/our-projects.md").frontmatter;

  return (
    <>
      {/* Header Section */}
      <section className="section text-white text-center py-28 px-4" data-aos="fade-down">
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
          <div className="row flex flex-col space-y-20">
            {list?.map((project: Project, index: number) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 30}
                data-aos-duration="600"
              >
                <ProjectCard
                  data={project}
                  reverse={index % 2 === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProjects;
