/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "*",
  //         hostname: "*",
  //         port: "",
  //         // pathname: "/my-bucket/**",
  //       },
  //     ],
  //   },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
