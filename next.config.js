/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
            'dashboard.clerk.com',
        ]
    }
}

module.exports = nextConfig
