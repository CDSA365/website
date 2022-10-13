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
};
