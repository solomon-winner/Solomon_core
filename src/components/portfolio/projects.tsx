"use client";

import { ArrowRight, Maximize2, CheckCircle2, Network, Microscope } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Project 1 — Autonomous Edge Grid (side-by-side, text left)        */
/* ------------------------------------------------------------------ */
function ProjectOne() {
  return (
    <section className="relative">
      <div className="ai-glow absolute -left-20 -top-20 w-96 h-96 opacity-50 -z-10" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* Left: Technical Specs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-2xl font-semibold">
              01
            </span>
            <div className="h-[1px] flex-grow bg-outline-variant" />
          </div>
          <h2 className="text-3xl font-semibold text-on-surface uppercase tracking-tight leading-snug">
            TechBee ERP
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "NestJS", "gRPC", "Microservices"].map((t) => (
              <span
                key={t}
                className="technical-chip px-2 py-1 text-xs uppercase text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="grid gap-4">
          <p className="text-base text-on-surface-variant leading-relaxed">

          A production-grade, distributed ERP platform serving over 1,000 employees across multiple organizations 
          in the Ethiopian business ecosystem. Built with a modular microservices architecture using Next.js and
           NestJS with gRPC, the system enables efficient, real-time communication and supports scalable, evolving 
           business workflows. It handles core domains such as HR, Finance, Project management,POS, sales, assets, 
           supply chain management and role-based access control, with a strong emphasis on data integrity, 
           reliability, and performance.        
             </p>
            <p className="text-base text-on-surface-variant leading-relaxed">

            I led the project end-to-end—from architecture design and technology selection 
            to full-stack implementation. Key decisions include adopting event-driven patterns 
            for asynchronous workflows and implementing fine-grained RBAC for secure multi-user 
            operations. The system is continuously improved based on real-world usage, reflecting 
            my ability to design, scale, and maintain production systems while balancing engineering 
            trade-offs and delivering measurable business value.
            </p>
           
          </div>
          
          <div className="code-block p-4 text-xs text-on-surface-variant overflow-x-auto scroll-hide">
            <pre>
             <code>{`// Multi-Tenant Context Resolver
// Ensures data isolation per company

@Injectable()
export class TenantInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();

    const tenantId = request.headers['x-tenant-id'];
    if (!tenantId) {
      throw new BadRequestException('Tenant not provided');
    }

    request.tenantId = tenantId;

    return next.handle();
  }
}`}</code>
            </pre>
          </div>
          <button className="group flex items-center gap-4 text-primary font-mono text-xs hover:gap-6 transition-all">
            EXPLORE_DOCUMENTATION{" "}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Large Diagram */}
        <div className="lg:col-span-7">
          <div className="glass-card aspect-video relative group overflow-hidden border-primary/20">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-[2s]"
              style={{
                backgroundImage:
                  "url('/SCM_bright.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface to-transparent opacity-80" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-primary/60 tracking-widest px-2 py-1 border border-primary/30 rounded">
                  SYSTEM_ARCHITECTURE_v4.2
                </span>
                <Maximize2 className="w-4 h-4 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-32 h-[1px] bg-primary/40" />
                  <span className="font-mono text-xs text-primary">
                    INGRESS_CLUSTER
                  </span>
                </div>
                <div className="flex items-center gap-6 ml-12">
                  <div className="w-16 h-[1px] bg-primary/40" />
                  <span className="font-mono text-xs text-primary">
                    COMPUTE_FABRIC
                  </span>
                </div>
                <div className="flex items-center gap-6 ml-20">
                  <div className="w-8 h-[1px] bg-primary/40" />
                  <span className="font-mono text-xs text-primary">
                    STATE_PERSISTENCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Project 2 — Nexus Core ERP (reversed side-by-side)                */
/* ------------------------------------------------------------------ */
function ProjectTwo() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* Left: Large Diagram (Visual First on desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="glass-card aspect-video relative group overflow-hidden border-secondary/20">
            {/* Background image with grayscale hover effect */}
            <img
              alt="Architecture diagram"
              src="/101.png"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-surface to-transparent opacity-80" />
            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-lg space-y-6">
                {/* Top labels row */}
                {/* <div className="flex justify-between text-xs font-mono text-secondary">
                  <span>CLIENT_LAYER</span>
                  <span>REST_GATEWAY</span>
                  <span>LOGIC_ENGINE</span>
                </div> */}
                {/* Central diagram: bordered container with line and dots */}
                {/* <div className="h-24 border-x border-secondary/30 flex items-center justify-center">
                  <div className="w-[80%] h-[1px] bg-secondary/30 relative">
                    <div className="absolute -top-1 left-1/4 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#d0bcff]" />
                    <div className="absolute -top-1 left-2/3 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#d0bcff]" />
                  </div>
                </div> */}
                {/* Bottom label */}
                {/* <div className="text-center">
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                    TRANSACTION_ORCHESTRATION_FLOW
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Specs */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-secondary font-mono text-2xl font-semibold">
              02
            </span>
            <div className="h-[1px] flex-grow bg-outline-variant" />
          </div>
          <h2 className="text-3xl font-semibold text-on-surface uppercase tracking-tight leading-snug">
            101 Drivers
          </h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Socket.io", "Prisma", "PostgreSQL"].map(
              (t) => (
                <span
                  key={t}
                  className="technical-chip px-2 py-1 text-xs uppercase text-secondary"
                >
                  {t}
                </span>
              )
            )}
          </div>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Built 101 Drivers, a real-time multi-role delivery logistics platform connecting dealers, 
            drivers, and admins through an event-driven WebSocket pipeline. Implemented Uber-style live GPS 
            tracking with map rotation and booking delivery, 3-layer coordinate filtering, and exponential smoothing for smooth 
            marker movement. Engineered the full delivery lifecycle — from quote and scheduling through driver 
            assignment, live tracking with compliance checkpoints, to completion, payment processing, and driver payouts. 
            Built role-specific interfaces (dealer dashboard, driver app with gig board and checklists, admin operations panel) 
            works in USA california and Italy.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-lg">
              <span className="text-[10px] font-mono text-on-surface-variant block mb-1">
                LATENCY_P99
              </span>
              <span className="text-2xl font-mono text-secondary font-semibold">
                12.4ms
              </span>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <span className="text-[10px] font-mono text-on-surface-variant block mb-1">
                THROUGHPUT
              </span>
              <span className="text-2xl font-mono text-secondary font-semibold">
                1.2GB/s
              </span>
            </div>
          </div>
          <button className="w-full border border-secondary/30 text-secondary font-mono text-xs py-3 hover:bg-secondary/10 transition-all flex justify-center items-center gap-2 rounded-lg">
            <Network className="w-4 h-4" />
            EXECUTE_TECHNICAL_DEEP_DIVE
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Project 3 — DeepSight Engine (full-width visual focus)             */
/* ------------------------------------------------------------------ */
function ProjectThree() {
  return (
    <section className="relative">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-tertiary-container font-mono text-2xl font-semibold">
          03
        </span>
        <div className="h-[1px] flex-grow bg-outline-variant" />
      </div>
      <div className="glass-card p-12 grid grid-cols-1 lg:grid-cols-3 gap-12 border-tertiary-container/20">
        {/* Left: Info */}
        <div className="lg:col-span-1 space-y-6">
          <span className="font-mono text-xs text-tertiary-container tracking-[0.3em] uppercase">
            certification
          </span>
          <h2 className="text-3xl font-semibold text-on-surface uppercase tracking-tight leading-snug">
             aws certified cloud practitioner
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
              Foundational certification validating understanding of AWS Cloud concepts,
              core services, security, pricing, and architecture principles. Demonstrates
              ability to design cost-effective and scalable cloud solutions using AWS.
          </p>
          <ul className="space-y-4 font-mono text-xs text-on-surface-variant">
            {[
              "AWS CORE SERVICES (EC2, S3, RDS, LAMBDA)",
              "CLOUD SECURITY & IAM",
              "PRICING & COST OPTIMIZATION",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tertiary-container shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Visual — matches original HTML exactly */}
        <div className="lg:col-span-2 order-1 ml-88 relative h-96 rounded overflow-hidden">
          <img
            className="w-85 h-full "
            alt="AWS Certified Cloud Practitioner badge"
            src="/certified.png"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/*<div className="w-3/4 h-3/4 border border-tertiary-container/40 flex items-center justify-center bg-surface/40 backdrop-blur-sm">
               <div className="text-center p-6">
                <Microscope className="w-12 h-12 text-tertiary-container mx-auto mb-6 animate-pulse" />
                <h4 className="font-mono text-primary mb-2">
                  NEURAL_PROCESSOR_v0.1
                </h4>
                <p className="text-[10px] font-mono text-on-surface-variant max-w-xs mx-auto uppercase tracking-widest leading-loose">
                  Initializing spatial analysis...
                  <br />
                  Weights loaded: 412M parameters
                  <br />
                  Confidence interval: 99.8%
                </p>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects wrapper                                                   */
/* ------------------------------------------------------------------ */
export default function ProjectsSection() {
  return (
    <div className="space-y-32">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
  );
}
