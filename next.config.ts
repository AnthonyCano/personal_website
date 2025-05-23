import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/personal_website" : "",
  assetPrefix: isGithubPages ? "/personal_website/" : "",
};

export default nextConfig;
