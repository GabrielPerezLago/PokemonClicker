import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class Game {

    click = signal(0)
    nombre = signal(``)
    tiempo = signal(`00:30`)

    
    addClick(): void {
        this.click.update( num => num + 1 )
    }


    reset(): void {
        this.click.set(0)
        this.nombre.set(``)
        this.tiempo.set(`00:30`)
    }


    set innerNombre(nombre: string) {
        this.nombre.set(nombre)
    }

    set innetTime(time: number) {
        this.click.set(time)
    }
}