module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as necessary
    "./node_modules/flowbite/**/*.js", // Include Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};
