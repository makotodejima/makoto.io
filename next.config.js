module.exports = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.amazonaws.com", port: "" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/gh",
        destination: "https://github.com/makotodejima",
        permanent: true,
      },
    ];
  },
};
