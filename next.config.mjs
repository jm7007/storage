/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: '/storage/',
    basePath: '/storage'
};

export default nextConfig;
