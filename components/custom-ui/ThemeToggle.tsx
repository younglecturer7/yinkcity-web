"use client";

import { Moon, Sun, Monitor, Gift, SunDim, SunMoon, Eclipse } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";


const themes = [
  { name: "light", icon: Sun, displayName: "Light" },
  { name: "dark", icon: Moon, displayName: "Dark" },
  { name: "system", icon: Monitor, displayName: "System" },
  { name: "xmas", icon: Gift, displayName: "Xmas" },
  { name: "xmasDark", icon: Eclipse, displayName: "Xmas Dark" },
  { name: "season", icon: SunDim, displayName: "Season" },
  { name: "sDark", icon: SunMoon, displayName: "Season Dark" },
];


export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // Accessibility: render a predictable placeholder for screen readers
    return <Button variant="outline" size="icon" aria-label="Theme loading" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="h-5 w-5 hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">

        {themes.map((t) => {
          const Icon = t.icon;
          return (
            <DropdownMenuItem
              key={t.name}
              onClick={() => setTheme(t.name)}
              className={theme === t.name ? "bg-accent" : ""}
            >
              <Icon className="mr-2 h-4 w-4" /> {t.displayName}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
