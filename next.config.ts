const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/personal_website" : "",
  assetPrefix: isGithubPages ? "/personal_website/" : "",
  trailingSlash: true, // ✅ critical for static exports
};

export default nextConfig;
