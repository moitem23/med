export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: "https://scottsdalemedicalstays.com/sitemap.xml"
  };
}
