import React from "react";
import Image from "next/image";
const projectStackData = [
  {
    type: "E-commerce",
    stack: ["Laravel", "React", "Flutter", "Redis", "Elasticsearch", "Stripe"],
  },
  {
    type: "Real-time Apps (Games, Chat)",
    stack: ["Node", "Socket.io", "Redis", "Flutter", "React Native"],
  },
  {
    type: "Logistics / Tracking",
    stack: ["Laravel", "Node", "PostGIS", "React", "Firebase"],
  },
  {
    type: "Fintech (Loans / EMI)",
    stack: ["Laravel", "MySQL", "PostgreSQL", "React", "JWT"],
  },
  {
    type: "Marketing Automation",
    stack: ["Laravel", "Redis", "Vue", "Twilio", "Mailgun", "AWS SES"],
  },
  {
    type: "Microservices",
    stack: ["Golang", "Python", "AWS"],
  },
  {
    type: "Deployments & Orchestration",
    stack: ["Docker", "Kubernetes", "Nginx"],
  },
];

// Map tech names to SVG icon file paths with normalized lowercase keys (no spaces or dots)
const iconMap: Record<string, string> = {
  laravel: "/images/integration/Larvelsvg.svg",
  react: "/images/integration/react.svg",
  reactnative: "/images/integration/react.svg",
  flutter: "/images/integration/flutter.svg",
  redis: "/images/integration/redis.svg",
  elasticsearch: "/images/integration/elasticsearch.svg",
  stripe: "/images/integration/stripe.svg",
  node: "/images/integration/node.svg",
  socketio: "/images/integration/socketio.svg",
  postgis: "/images/integration/postgis.svg",
  firebase: "/images/integration/firebase.svg",
  mysql: "/images/integration/mysql.svg",
  postgresql: "/images/integration/postgre.svg",
  jwt: "/images/integration/jwt.svg",
  vuejs: "/images/integration/vuejs.svg",
  vue: "/images/integration/vue.svg",
  twilio: "/images/integration/twilio.svg",
  mailgun: "/images/integration/mailgun.svg",
  aws: "/images/integration/aws.svg",
  awsses: "/images/integration/aws-ses.svg",
  golang: "/images/integration/go.svg",
  python: "/images/integration/python.svg",
  docker: "/images/integration/docker.svg",
  kubernetes: "/images/integration/kubernetes.svg",
  nginx: "/images/integration/nginx.svg",
};



const PreferredStack = () => {
  return (
    <section className="section py-24">
      <div className="container">
        <div className="row justify-center">
          <div className="mx-auto text-center lg:col-8">
            <h2 className="has-gradient mb-16 text-4xl md:text-5xl font-extrabold tracking-tight">
              Preferred Stack Based on Project Categories
            </h2>
          </div>
        </div>

        <div className="row g-4 justify-center">
          {projectStackData.map(({ type, stack }, idx) => (
            <div
              key={idx}
              className="md:col-6 lg:col-4"
              data-aos="fade-up-sm"
              data-aos-delay={idx * 100}
            >
              <div className="group relative min-h-full overflow-hidden rounded-lg border border-white/5 bg-dark p-9 shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <h3 className="tracking-none mb-6 text-xl font-bold text-white transition-colors">
                  {type}
                </h3>
                <ul className="text-lg text-zinc-300 leading-relaxed grid grid-cols-2 gap-x-6 gap-y-3 justify-center text-center">
  {stack.map((tech, i) => {
    const cleanTech = tech.toLowerCase().replace(/[\W_]/g, "");
    const iconSrc = iconMap[cleanTech];

    return (
      <li key={i} className="flex  gap-3">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={`${tech} logo`}
            width={25}
            height={25}
            className="inline-block"
            unoptimized={true}
          />
        )}
        <span>{tech}</span>
      </li>
    );
  })}
</ul>


                <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-slate-800 opacity-0 blur-[83px] transition-opacity duration-300 bg-gradient-to-l group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreferredStack;


