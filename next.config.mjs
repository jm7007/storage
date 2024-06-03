/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    assetPrefix: '/storage/public/',
    basePath: '/storage',
};

export default nextConfig;
