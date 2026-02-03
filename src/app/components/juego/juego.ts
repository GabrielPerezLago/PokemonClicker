import { Component, signal } from '@angular/core';
import { ClickerButton } from './components/clicker-button/clicker-button';
import { Header } from '../header/header';
import { Appbutton } from '../appbutton/appbutton';
import { ContadorJuego } from './components/contador-juego/contador-juego';

@Component({
  selector: 'juego',
  imports: [ClickerButton, Header, Appbutton, ContadorJuego],
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})
export class Juego {

  public click = signal(0)

}
