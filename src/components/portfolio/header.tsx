"use client";

import { Terminal, Cpu } from "lucide-react";

const navItems = [
  { index: "01", label: "NUCLEUS", section: "nucleus" },
  { index: "02", label: "PROJECTS", section: "projects" },
  { index: "03", label: "SKILLS", section: "skills" },
  { index: "04", label: "SYSTEM_STATS", section: "system" },
];

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Header({
  activeSection,
  onSectionChange,
}: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant px-6 h-20 flex items-center justify-between">
      {/* Logo */}
      <button
        onClick={() => onSectionChange("projects")}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <Terminal className="w-7 h-7 text-primary transition-transform group-hover:rotate-90" />
        <div className="flex flex-col">
          <span className="font-mono text-sm text-primary uppercase tracking-widest leading-none">
            SOLOMON_CORE
          </span>
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
            v2.0_STABLE
          </span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-20">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onSectionChange(item.section)}
            className={`font-mono text-sm transition-colors flex items-center gap-2 ${
              activeSection === item.section
                ? "text-primary border-b border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="text-[12px] opacity-50">{item.index}</span>{" "}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Right side indicators */}
      <div className="flex items-center gap-6">
        <div className="hidden xl:flex items-center gap-2 px-4 py-2 technical-chip rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-mono">UPLINK_ACTIVE</span>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-colors p-2">
          <Cpu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
