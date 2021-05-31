// import electron
const {app, BrowserWindow, ipcMain} = require("electron");

// vytvoreni okna aplikace
let win = null;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    win.loadFile("index.html");
};

app.whenReady().then(createWindow);

// generovani hesla
ipcMain.on("generatePassword", (event, data) => {
    const randomPassword = data + Math.random().toString(36).substr(2, 5);
    win.webContents.send("receivePassword", randomPassword);
});