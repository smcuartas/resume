/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}
