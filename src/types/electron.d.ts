export {}

declare global {
    interface Window {
        electronAPI: {
            saveGame: (data: { nombre: string; clicks: number; tiempo?: string }) => Promise<void>;
            getGame: () => Promise<any[]>;
            quitApp: () => Promise<void>;
        }
    }
}