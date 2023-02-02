/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/*",
			},
			{
				protocol: "https",
				hostname: "tuk-cdn.s3.amazonaws.com",
				port: "",
				pathname: "/assets/components/sidebar_layout/*",
			},
		],
	},
};

module.exports = nextConfig;
