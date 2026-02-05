import { Component, signal } from '@angular/core';
import { ClickerButton } from './components/clicker-button/clicker-button';
import { Header } from '../header/header';
import { Appbutton } from '../appbutton/appbutton';
import { ContadorJuego } from './components/contador-juego/contador-juego';
import { Game } from '../../global/Game';
import { Tiempo } from './components/tiempo/tiempo';
import { Router } from '@angular/router';
import { DBController } from '../../global/DBController';

@Component({
  selector: 'juego',
  imports: [ClickerButton, Header, Appbutton, ContadorJuego, Tiempo,],
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})
export class Juego {
  protected readonly defaultName = `User`
  constructor(public game : Game, private ruter: Router, private dbController: DBController){}


  public toEndGAme() {
    this.dbController.insertGame(this.game.nombre(), this.game.click(), this.game.tiempo())
    
    this.game.reset()

    this.ruter.navigate(['/inicio'])
  }

}
