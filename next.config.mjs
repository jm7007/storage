/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    assetPrefix: '/storage/',
    basePath: '/storage',
};

export default nextConfig;
