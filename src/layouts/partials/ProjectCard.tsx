import Image from "next/image";

interface TechItem {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  data: {
    title: string;
    description: string;
    image: string;
    link?: string;
    category: string;
    domain?: string; // New field for broader classification
    year: string;
    techstack: {
      backend?: TechItem[];
      frontend?: TechItem[];
      app?: TechItem[];
      ml?: TechItem[];  // Added ML here
    };
  };
  reverse?: boolean;
}

const ProjectCard = ({ data, reverse = false }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-surface`}
    >
      {/* Image Section */}
      <div className="w-full max-w-[320px] mx-auto aspect-square lg:max-w-none lg:w-[35%] lg:h-auto relative">
  <Image
    src={data.image}
    alt={data.title}
    fill
    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
    sizes="(max-width: 1024px) 100vw, 35vw"
    priority
  />
</div>


      {/* Content Section */}
      <div className="lg:w-[65%] w-full p-6 pr-10 pl-10 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-2 tracking-tight leading-snug">
          {data.title}
        </h3>

        <p className="text-sm text-muted mb-1">
          {data.category} ・ {data.year}
        </p>

        <p className="text-base text-muted mb-5 leading-relaxed tracking-wide">
          {data.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-col gap-4 mb-5">
          {["backend", "frontend", "app", "ml"].map((stackKey) => {
            const stack = data.techstack?.[stackKey as keyof typeof data.techstack];
            if (!stack || stack.length === 0) return null;

            return (
              <div key={stackKey}>
                <p className="text-sm font-medium mb-1 uppercase">{stackKey}:</p>
                <div className="flex flex-wrap items-center gap-3">
                  {stack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={20}
                        height={20}
                      />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain Display */}
        {data.domain && (
          <div className="text-md font-medium capitalize mt-2">
            Category : &nbsp;
         <span
  className="inline-block text-sm font-medium tracking-wide text-[#ef4123]"
  style={{
    textShadow: '0 0 6px #ef4123, 0 0 6px #ef4123',
  }}
>
  {data.domain}
</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
