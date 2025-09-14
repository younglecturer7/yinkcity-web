import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YinkCity",
    short_name: "YinkCity",
    description:
      "business community where you can sell and buy a products and services",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/white-logo.jpg",
        sizes: "192x192",
        type: "image/jpg",
      },
      {
        src: "/white-logo.jpg",
        sizes: "512x512",
        type: "image/jpg",
      },
    ],
  };
}
