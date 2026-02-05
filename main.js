const Database = require('better-sqlite3')
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {

  const dbPath = path.join(app.getPath(`userData`),'game.db')

  db = new Database(dbPath)

  db.prepare(`
    CREATE TABLE IF NOT EXISTS PUNTUACIONES(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOMBRE TEXT NOT NULL,
    CLICKS INTEGER NOT NULL,
    TIEMPO TEXT NOT NULL
    )
    `).run()




  const win = new BrowserWindow({
    width: 1900,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  })

  win.loadURL('http://localhost:4200')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('app:quit', () => {
  app.quit()
})

ipcMain.handle('saveGame', (_, data) => {
  db.prepare(
    `INSERT INTO PUNTUACIONES (NOMBRE, CLICKS, TIEMPO) VALUES (?, ?, ?)`
  ).run(data.nombre, data.clicks, data.tiempo)
})

ipcMain.handle('getGame', () => {
  return db.prepare(`SELECT * FROM PUNTUACIONES ORDER BY CLICKS DESC`).all()
})

