module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.notion.so", port: "" },
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
