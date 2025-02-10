const { app, BrowserWindow } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    fullscreen: true, // Open in full-screen mode
    webPreferences: {
      nodeIntegration: false, // Disable Node.js access for security
      contextIsolation: true, // Improves security
    },
  });

  // Load a webpage inside the WebView
  mainWindow.loadURL("https://dragonsreel.com/store/");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
