const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: "/personal_website",
  assetPrefix: "/personal_website/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
