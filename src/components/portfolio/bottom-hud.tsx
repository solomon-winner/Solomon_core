"use client";

const hudItems = [
  // { label: "Nucleus", section: "nucleus" },
  { label: "Projects", section: "projects" },
  // { label: "Skills", section: "skills" },
  { label: "Exprience", section: "system" },
];

interface BottomHUDProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function BottomHUD({
  activeSection,
  onSectionChange,
}: BottomHUDProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-xs p-1 glass-card rounded-full border-primary/20">
      {hudItems.map((item) => (
        <button
          key={item.section}
          onClick={() => onSectionChange(item.section)}
          className={`px-6 py-2 rounded-full font-mono text-[10px] tracking-widest transition-all uppercase ${
            activeSection === item.section
              ? "bg-primary/20 text-primary shadow-[0_0_15px_rgba(0,219,231,0.2)]"
              : "text-on-surface-variant hover:bg-white/5"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
