import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // TODO: change this once we have a real image source
    images: {
        remotePatterns: [new URL("https://fakestoreapi.com/**")],
    },
};

export default nextConfig;
