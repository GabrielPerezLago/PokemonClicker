import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class Game {

    click = signal(0)
    public nombre?: string;
    
    getCLick(): number{
        return this.click()
    }

    addClick(): void {
        this.click.update( num => num + 1 )
    }


    reset(): void {
        this.click.set(0)
    }


    set innerNombre(nombre: string) {
        this.nombre = nombre
    }
}