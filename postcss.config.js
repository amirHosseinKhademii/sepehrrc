module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // ...(process.env.NODE_ENV === "production"
    //   ? {
    //       "@fullhuman/postcss-purgecss": {
    //         content: [
    //           "./pages/*.js",
    //           "./pages/**/*.js",
    //           "./components/*.js",
    //           "./components/**/*.js",
    //           "./pages/*.tsx",
    //           "./pages/**/*.tsx",
    //           "./components/*.tsx",
    //           "./components/**/*.tsx",
    //         ],
    //         defaultExtractor: (content) =>
    //           content.match(/[\w-/:]+(?<!:)/g) || [],
    //       },
    //     }
    //   : {}),
  },
};
