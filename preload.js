const { contextBridge, ipcRenderer } = require('electron');


contextBridge.executeInMainWorld('electronApi', {
    quitApp: () => ipcRenderer.invoke('app:quit')
})