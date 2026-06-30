"use client";

import { Rocket } from "lucide-react";

const timelineEntries = [
  {
    id: 1,
    period: "2022 — PRESENT",
    title: "Lead Systems Architect @ CloudScale",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCN7_WBlNgZ5J9V_25XPgozk_WYIPePVTZxf-ehqRrZGXjigOBdDbq_4DkmNoRRFDg_-62pLIQgWn9I5ih2rxOVXuCVVYfeMrG-MTl4nCipOomM442Gb80hagjkk7CRuTFWr8iqnx7Xg6s-Y-t2PZcyg_gcbuWDY8U6WWk6Hr4A-FOITmZv169F-KyqSszauS7I8VM5qgUHqk3LwkzLli666i0PzioqGy0YBQvoZYE3I5rWe4RnYOu0efqB8Ol-O7o8aLF5KCkNBY",
    imageAlt: "Futuristic data center",
    accent: "primary" as const,
    wins: [
      "Orchestrated migration of 500+ microservices to a serverless architecture, reducing latency by 40%.",
      "Implemented a custom distributed tracing layer using OpenTelemetry and ClickHouse for real-time observability.",
    ],
  },
  {
    id: 2,
    period: "2020 — 2022",
    title: "AI Engineer @ NeuralPath",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhpV7qKM9wiLznhZIUrot5WjWecPxyDyeVqyRU9E-lYixvbJ9k_QBEg-M_8f101_JIhsVwwH9SOo95XuITbUJm3sHQ7UXDuLOASYzEejZ-w3ZZ3XGh_ImaW6d_2g7gG1OHze66l3crGm3GjDWPpV72bOjoY08x2ndwXioXK2zbU_aY120p8xbJv-w7ngf-8UJbFl2es12k7sI-pT2vQiybgqQP1oWEOLd994bPxaFt8e1voLdYeEl84DrS236X-KYZgGDNJ8hC_iA",
    imageAlt: "Neural network visualization",
    accent: "secondary" as const,
    wins: [
      "Designed and deployed a proprietary RAG (Retrieval-Augmented Generation) pipeline for enterprise legal analysis.",
      "Optimized LLM inference times by 60% through custom quantization techniques and TensorRT integration.",
    ],
  },
  {
    id: 3,
    period: "2018 — 2020",
    title: "Full-Stack Dev @ WebNexus",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_b1QiSqq-B6iqqrAsYwTRH4hD_7jG8RjFRUJZsl9buGBJFkQrJJGz7d96ntdFbXpyk9ymfnmUQnRS8SQ_miohTvrogv4JN_Yphk6o8oa-NKYKzdRNH-uuvhRVuA_KnUiX0ia1F9fV62q76q0RtIqBlPyOPjvx8owGDEg_KSIYNbe_9OjpBN56sDQsA1kSZSUIn2cDfE5bXfEMJEK8ygqaJcWiZ1Bk-8rB_enEDv1KRqBrBjEs8QvVWs4Dxas-xJsfWqenC6PnWhA",
    imageAlt: "Code editor",
    accent: "primary" as const,
    wins: [
      "Developed a high-performance React component library used across 12 distinct product lines.",
      "Engineered a real-time collaboration engine using WebSockets and CRDTs for seamless multi-user editing.",
    ],
  },
];

export default function SystemSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">
            04 // SYSTEM_EVOLUTION
          </span>
          <h1 className="text-4xl md:text-[72px] font-extrabold text-primary max-w-4xl leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-0.04em]">
            Technical Lineage &amp; Milestones.
          </h1>
        </div>
      </section>

      {/* Two-Column Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* Column 1: Timeline */}
        <section className="lg:col-span-7 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] timeline-line" />
          <div className="flex flex-col gap-20">
            {timelineEntries.map((entry) => {
              const isPrimary = entry.accent === "primary";
              const dotColor = isPrimary ? "bg-primary" : "bg-secondary";
              const hoverBorder = isPrimary
                ? "group-hover:border-primary/40"
                : "group-hover:border-secondary/40";
              const dotColorClass = isPrimary
                ? "bg-primary-container"
                : "bg-secondary-container";

              return (
                <div key={entry.id} className="relative pl-12 group">
                  {/* Timeline dot */}
                  <div className="absolute left-4 -translate-x-1/2 top-4 z-10 flex items-center justify-center">
                    <div
                      className={`w-4 h-4 ${dotColor} glow-accent rounded-full border-4 border-background pulse-dot transition-transform group-hover:scale-150`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`glass-card p-6 rounded-lg ${hoverBorder} transition-all duration-500`}
                  >
                    <span className="font-mono text-xs text-secondary mb-2 block">
                      {entry.period}
                    </span>
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                      {entry.title}
                    </h3>

                    {/* Image */}
                    <div className="mb-6 h-48 w-full bg-surface-container overflow-hidden rounded-lg border border-outline-variant">
                      <img
                        alt={entry.imageAlt}
                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                        src={entry.image}
                      />
                    </div>

                    {/* Key Wins */}
                    <div className="flex flex-col gap-2">
                      <p className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                        Key Technical Wins
                      </p>
                      <ul className="flex flex-col gap-2">
                        {entry.wins.map((win, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className={`w-1.5 h-1.5 ${dotColorClass} mt-2 shrink-0 rounded-sm`}
                            />
                            <p className="text-base text-on-surface leading-relaxed">
                              {win}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Column 2: Contact/Collaboration */}
        <aside className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="glass-card p-12 rounded-xl flex flex-col items-center text-center gap-6 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col items-center gap-4">
              <Rocket className="w-10 h-10 text-primary mb-1" />
              <h2 className="text-3xl font-semibold text-primary">
                Initiate Collaboration.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Available for architectural consulting, AI systems design, and
                high-impact technical leadership.
              </p>
            </div>

            <div className="w-full flex flex-col gap-4 mt-6">
              <button className="w-full px-20 py-4 bg-primary-container text-on-primary font-mono text-sm uppercase tracking-[0.2em] hover:bg-primary hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.3)] rounded">
                Connect_Now
              </button>
              <button className="w-full px-20 py-4 border border-outline text-on-surface font-mono text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all rounded">
                View_Portfolio
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-outline-variant w-full grid grid-cols-2 gap-4">
              <div className="text-left">
                <p className="font-mono text-[10px] text-on-surface-variant uppercase">
                  Current Status
                </p>
                <p className="text-base text-primary flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />{" "}
                  OPEN_TO_SYNC
                </p>
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] text-on-surface-variant uppercase">
                  Timezone
                </p>
                <p className="text-base text-on-surface">UTC-05:00</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
