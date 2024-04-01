/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: '/jm7007/storage/',
};

export default nextConfig;
