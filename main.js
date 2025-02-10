require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const { app, BrowserWindow } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const appURL = process.env.APP_URL || "http://localhost:3000";
  mainWindow.loadURL(appURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
