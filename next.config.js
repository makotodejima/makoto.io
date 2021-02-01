module.exports = {
  images: {
    domains: ["www.notion.so"],
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
