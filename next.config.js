/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        loader: "akamai",
        path: "",
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require("./scripts/sitemap-generator");
        }
        return config;
    },
    env: {
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
};
