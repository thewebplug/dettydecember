// /** @type {import('next').NextConfig} */
// const nextConfig = {
    
//     output: 'export',
//     images: {
//         unoptimized: true,
//     },
//     // basePath: '/build',

// };

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    // basePath: '/build',
  };
  
  export default nextConfig;
  


