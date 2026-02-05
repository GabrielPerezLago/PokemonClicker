import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DBController {

    insertGame(nombre: string, clicks: number, tiempo: string) {
        return window.electronAPI.saveGame({ nombre, clicks, tiempo });
    }

    findAll() {
        return window.electronAPI.getGame();
    }
}
