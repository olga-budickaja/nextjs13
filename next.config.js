/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        mdxRs: true,
        serverComponentsExternalPackages: [
            'dashboard.clerk.com',
            'mongoose',
            
        ],
    },
    images: {
        domains: [
            'github.com',
        ]
    }
}

module.exports = nextConfig
