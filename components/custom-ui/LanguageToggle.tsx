"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { GB, FR, ES, NG } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  { name: "English", icon: GB, value: 'en'},
  { name: "French", icon: FR, value: "fr" },
  { name: "Spanish", icon: ES, value: "es" },
  { name: "Yoruba", icon: NG, value: "yo" },
  { name: "Igbo", icon: NG, value: "ig" },
  { name: "Hausa", icon: NG, value: "ha" },
];

export default function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // Accessibility: render a predictable placeholder for screen readers
    return <Button variant="outline" size="icon" aria-label="Theme loading" />;
  }

  const switchLocale = (newLocale: string) => {
    // console.log("new locale", newLocale)

    if (newLocale != locale) {
      router.replace(pathName, { locale: newLocale })
      localStorage.setItem("lang", newLocale)
    }
    setLanguage(newLocale);
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">

          <span className="sr-only">Toggle Language</span>
          {language == "en" && <span className="flex"><GB title="English" className="size-5 mr-2" /> English </span>}
          {language == "fr" && <span className="flex"><FR title="French" className="size-5 mr-2" />French</span>}
          {language == "es" && <span className="flex"><ES title="Espanyo" className="size-5 mr-2" />Espanyo</span>}
          {language == "yo" && <span className="flex"><NG title="Yoruba" className="size-5 mr-2" />Yoruba</span>}
          {language == "ig" && <span className="flex"><NG title="Igbo" className="size-5 mr-2" />Igbo</span>}
          {language == "ha" && <span className="flex"><NG title="Hausa" className="size-5 mr-2" />Hausa</span>}

          {/* {language} */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => {
          const Icon = lang.icon;
          return (
            <DropdownMenuItem
              key={lang.value}
              onClick={() => switchLocale(lang.value)}
              className={language === lang.value ? "bg-accent" : ""}
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
