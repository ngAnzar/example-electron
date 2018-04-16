import { app, BrowserWindow } from "electron"

let mainWindow: BrowserWindow

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    if (__DEV_SERVER__) {
        mainWindow.loadURL(__DEV_SERVER__.replace(/\/+$/, "") + "/index.html")
    } else {
        mainWindow.loadURL(`file://${__dirname}/index.html`)
    }

    if (__ENV__ === "develop") {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.on("close", () => app.quit())
})

app.on("window-all-closed", () => app.quit())
