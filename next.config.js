module.exports = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
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
