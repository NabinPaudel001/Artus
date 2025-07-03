import React from "react";

const techStackData = [
  {
    title: "1. Backend & APIs",
    items: [
      ["Primary", "Laravel (MVC, API, Eloquent)"],
      ["Realtime", "Node.js, Socket.IO, Laravel Echo"],
      ["Microservices", "Python (FastAPI, Django), AWS Lambdas"],
      ["Queues", "Laravel Queues + Redis, SQS"],
      ["Serverless", "AWS Lambda, Firebase"],
      ["ML", "Python"],
    ],
  },
  {
    title: "2. Databases",
    items: [
      ["SQL", "MySQL, PostgreSQL"],
      ["NoSQL", "MongoDB, Firebase"],
      ["Cache", "Redis, Memcached"],
      ["Analytics", "ClickHouse, TimescaleDB"],
    ],
  },
  {
    title: "3. Frontend Web",
    items: [
      ["SPA", "React.js (Next.js), Vue.js (Nuxt)"],
      ["State", "Redux, Pinia"],
      ["UI", "Tailwind, MUI, Bootstrap"],
    ],
  },
  {
    title: "4. Mobile Apps",
    items: [
      ["Cross-platform", "Flutter, React Native"],
      ["Native", "Swift (iOS), Kotlin (Android)"],
      ["State", "Provider, Bloc, Redux"],
    ],
  },
  {
    title: "5. ML & LLM",
    items: [
      ["Framework", "LangChain, LlamaIndex"],
      ["Models", "GPT-4, DeepSeek, Mistral"],
      ["Embeddings", "OpenAI, MiniLM, BGE"],
      ["Vector DB", "Chroma, Pinecone"],
      ["Prep", "PyPDF, LangChain Splitting"],
    ],
  },
  {
    title: "6. DevOps & Cloud",
    items: [
      ["Hosting", "AWS, GCP, DigitalOcean"],
      ["Containers", "Docker, Kubernetes"],
      ["CI/CD", "GitHub Actions, Jenkins"],
      ["Monitoring", "Grafana, Sentry, Telescope"],
    ],
  },
  {
    title: "7. Security & Auth",
    items: [
      ["Auth", "Sanctum, JWT, OAuth 2.0"],
      ["Security", "Helmet.js, Cloudflare"],
    ],
  },
  {
    title: "8. Additional Services",
    items: [
      ["Search", "Elasticsearch, Algolia, Vector Search"],
      ["Payments", "Stripe, Paddle, PayPal, Razorpay"],
      ["Notifications", "FCM, Twilio, Pusher"],
    ],
  },
];

const OurTechStack = () => {
  return (
    <section className="section py-24">
      <div className="container">
        <div className="row justify-center">
          <div className="mx-auto text-center lg:col-8">
            <h2 className="has-gradient mb-16 text-4xl md:text-5xl font-extrabold tracking-tight">
              Our Technology Stack
            </h2>
          </div>
        </div>

        <div className="row g-4 justify-center">
          {techStackData.map((stack, idx) => (
            <div
              key={idx}
              className="md:col-6 lg:col-4"
              data-aos="fade-up-sm"
              data-aos-delay={idx * 100}
            >
              <div className="group relative min-h-full overflow-hidden rounded-lg border border-white/5 bg-dark p-9 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="tracking-none mb-6 text-xl font-bold text-whitetransition-colors">
                  {stack.title}
                </h3>
                <ul className="text-sm text-zinc-300 leading-relaxed space-y-3">
                  {stack.items.map(([label, detail], index) => (
                    <li key={index}>
                      <span className="font-semibold text-white">{label}:</span>{" "}
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Glow effect on hover, same as Values component */}
                <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] h-[180px] w-[335px] rotate-[-20deg] from-dark/0 to-slate-800 opacity-0 blur-[83px] transition-opacity duration-300 bg-gradient-to-l group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechStack;
