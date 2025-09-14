
import { LoginForm } from "@/components/login-form";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";


export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)
  setRequestLocale(locale)
  
  return (

    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
