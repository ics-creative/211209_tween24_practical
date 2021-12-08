const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "/211209_tween24_practical",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        beltScroll: resolve(__dirname, "beltScroll/index.html"),
        creative: resolve(__dirname, "creative/index.html"),
        card: resolve(__dirname, "card/index.html"),
        cardList: resolve(__dirname, "cardList/index.html"),
        svg: resolve(__dirname, "svg/index.html"),
        text: resolve(__dirname, "text/index.html"),
        underline: resolve(__dirname, "underline/index.html"),
      },
    },
  },
});
