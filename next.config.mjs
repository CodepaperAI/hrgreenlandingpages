/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services/interlocking-pavers",
        destination: "/services/interlocking-paver-installation",
        permanent: true
      },
      {
        source: "/services/deck-services",
        destination: "/services/professional-deck-design-installation",
        permanent: true
      },
      {
        source: "/services/fence-installation",
        destination: "/services/professional-fence-installation",
        permanent: true
      },
      {
        source: "/services/garden-suites",
        destination: "/services/garden-suite",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
