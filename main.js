require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: false, // Keep this false for security
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, "preload.js"), // Use preload to pass env variables
    },
  });

  const env = process.env.NODE_ENV || "development";
  console.log("Running in:", env);

  const appURL = process.env.APP_URL; // Fallback to Google
  console.log("appURL:", appURL); // Fixed alert issue

  if (!appURL) {
    console.error("❌ ERROR: appURL is not defined!");
  }

  console.log("Loading:", appURL);
  mainWindow.loadURL(appURL).catch((err) => {
    console.error("❌ Failed to load URL:", err);
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
