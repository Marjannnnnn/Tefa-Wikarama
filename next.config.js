/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "firebasestorage.googleapis.com",
            "images.unsplash.com",
            "media4.giphy.com",
            "www.smkwikrama.sch.id",
            "play-lh.googleusercontent.com",
            "1.bp.blogspot.com"
        ],
    },
};

module.exports = nextConfig;
