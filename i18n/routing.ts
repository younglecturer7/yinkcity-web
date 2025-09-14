// import { getRequestConfig } from "next-intl/server";
import { defineRouting } from "next-intl/routing";

// export default getRequestConfig(async () => {
//   // Static for now, we'll change this later
//   const locale = "yo";

//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });

export const routing = defineRouting({
  locales: ["en", "fr", "es", "yo", "ha", "ig"],
  defaultLocale: 'en',
  localePrefix: "as-needed"
});
