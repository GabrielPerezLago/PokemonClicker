const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('electronAPI', {
    saveGame: (data) => ipcRenderer.invoke(`saveGame`, data),
    getGame: () => ipcRenderer.invoke('getGame'),
    quitApp: () => ipcRenderer.invoke('app:quit')
})