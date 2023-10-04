/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        mdxRs: true,
        serverComponentsExternalPackages: [
            'dashboard.clerk.com',
        ],
    }
}

module.exports = nextConfig
