"use client";

import { Terminal, Mail, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-20 bg-surface-container-lowest border-t border-outline-variant mt-32">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left: Branding */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-on-surface uppercase tracking-widest">
              ENGINEER_CORE_v2.0
            </span>
          </div>
          <p className="font-mono text-xs text-on-surface-variant">
            &copy; 2024 CORE_ARCHITECT | ALL SYSTEMS OPERATIONAL
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
              Connect
            </span>
            <div className="flex gap-6">
              <a
                href="#"
                aria-label="GitHub"
                className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
              >
                <Terminal className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
              >
                <Link2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
              Navigation
            </span>
            <div className="flex gap-6 font-mono text-xs">
              <a href="#" className="hover:text-primary text-on-surface-variant">
                INDEX
              </a>
              <a href="#" className="hover:text-primary text-on-surface-variant">
                LOGS
              </a>
              <a href="#" className="hover:text-primary text-on-surface-variant">
                CORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
