module.exports = {
  appId: "com.dragonreel.app",
  productName: "dev-dragonreel",
  directories: {
    output: "dist",
  },
  files: ["main.js", "package.json", ".env*"],
  win: {
    target: "portable",
    icon: "/assets/icons/icon.ico",
  },
  main: "main.js",
};
