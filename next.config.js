// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

// module.exports = {
//   exportTrailingSlash: true,
//   exportPathMap: function() {
//     return {
//       '/': { page: '/' }
//     };
//   }
// }

module.exports = {
  exportTrailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    loader: 'imgix',
    path: 'C:\Users\HP\Documents\my-app\public',
  },
};