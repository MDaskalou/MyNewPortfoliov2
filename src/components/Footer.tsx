"use client";

import React from "react";
import { useFooterTranslation } from "@/context/TranslationContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useFooterTranslation();

  return (
    <footer className="border-t border-gray-700 bg-gray-900 text-gray-400">
      <div className="container mx-auto max-w-5xl px-6 py-8 text-center">
        <p>
          &copy; {currentYear} {t.copyright}
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/mikael-daskalou-46b424184/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            {t.links.linkedin}
          </a>
          <a
            href="https://github.com/mdaskalou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            {t.links.github}
          </a>
        </div>
      </div>
    </footer>
  );
}