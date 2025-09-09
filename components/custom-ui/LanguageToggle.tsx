"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { GB, FR, ES } from "country-flag-icons/react/3x2";

const languages = [
  { name: "English", icon: GB },
  { name: "French", icon: FR },
  { name: "Spanish", icon: ES },
];

export default function LanguageToggle() {
  const [language, setLanguage] = useState("English");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // Accessibility: render a predictable placeholder for screen readers
    return <Button variant="outline" size="icon" aria-label="Theme loading" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {/* <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="h-5 w-5 hidden dark:block" /> */}

          <span className="sr-only">Toggle Language</span>
          {language == "English" && <GB title="English" className="size-5" />}
          {language == "French" && <FR title="French" className="size-5" />}
          {language == "Spanish" && <ES title="Spanish" className="size-5" />}

          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => {
          const Icon = lang.icon;
          return (
            <DropdownMenuItem
              key={lang.name}
              onClick={() => setLanguage(lang.name)}
              className={language === lang.name ? "bg-accent" : ""}
            >
              <Icon className="mr-2 h-4 w-4" />
              {/* <GB title={lang.name} className="size-5" /> */}
              {lang.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
