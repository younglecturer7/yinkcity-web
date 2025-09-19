"use client";

import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  useEffect(() => {
    const lang = localStorage.getItem("lang")
    if(!lang){
      setLanguage('en')
    }
    setMounted(true)
  }, []);

  useEffect(() => {
    const newLang = localStorage.getItem("lang")
    setLanguage(newLang)
  }, [language]);

  if (!mounted) {
    // Accessibility: render a predictable placeholder for screen readers
    return <Button variant="outline" size="icon" aria-label="Theme loading" />;
  }

  const switchLocale = (newLocale: string) => {

    if (newLocale != locale) {
      router.replace(pathName, { locale: newLocale })
      localStorage.setItem("lang", newLocale)
    }
    setLanguage(newLocale);
  }


  return (
    <>
      <Select
        value={language}
        onValueChange={(language) => switchLocale(language)}
      >
        <SelectTrigger className="w-fit">
          {!language && <span className="flex items-center justify-center">
            <GB className="mr-2 h-4 w-4" /> English 
          </span>}
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => {
            const Icon = lang.icon;

            return (
              <SelectItem key={lang.value} value={lang.value}>
                <Icon className="mr-2 h-4 w-4" />
                {lang.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
}
