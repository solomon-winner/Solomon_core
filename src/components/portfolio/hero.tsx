"use client";

export default function HeroSection() {
  return (
    <section
      id="projects"
      className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-12"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-12 h-[1px] bg-primary" />
          <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">
            Full_Stack_Software_Developer
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold uppercase tracking-tighter text-primary leading-[1.1] lg:leading-[1.1]">
          SOLOMON  YALEW
        </h1>
        <p className="text-lg text-on-surface-variant mt-4 leading-relaxed">
          Full-stack developer with hands-on experience in several impactful projects, including building an ERP system from scratch for the Ethiopian ecosystem, incorporating features from Odoo and Oracle to ensure flexibility. Experienced in React, Next.js, NestJS, and AWS.
        </p>
      </div>
      <div className="hidden lg:block text-right">
        <span className="font-mono text-xs text-on-surface-variant block">
          SYSTEM_LOAD: 12%
        </span>
        <span className="font-mono text-xs text-on-surface-variant block">
          ACTIVE_NODES: 1,422
        </span>
      </div>
    </section>
  );
}
