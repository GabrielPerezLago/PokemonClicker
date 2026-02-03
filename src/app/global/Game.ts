import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class Game {

    click = signal(0)
    
    getCLick(): number{
        return this.click()
    }

    addClick(): void {
        this.click.update(num => num +1 )
        console.log(this.click)
    }


    reset(): void {
        this.click.set(0)
    }
}