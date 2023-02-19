module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  async redirects() {
    return [
      {
        source: '/apply',
        destination: 'https://docs.google.com/forms/d/1pozjGK8Nc8l3mpCdsFkN8SlvL6LcVm6FaOi4jkba-ws/edit?pli=1',
        permanent: false,
        basePath: false
      },
    ]
  },
};