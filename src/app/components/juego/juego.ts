import { Component, signal } from '@angular/core';
import { ClickerButton } from './components/clicker-button/clicker-button';
import { Header } from '../header/header';
import { Appbutton } from '../appbutton/appbutton';
import { ContadorJuego } from './components/contador-juego/contador-juego';
import { Game } from '../../global/Game';

@Component({
  selector: 'juego',
  imports: [ClickerButton, Header, Appbutton, ContadorJuego],
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})
export class Juego {
  protected readonly defaultName = `User`
  constructor(public game : Game){}

}
