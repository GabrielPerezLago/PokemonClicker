import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Game } from '../../../../global/Game';
import gsap from 'gsap';

@Component({
  selector: 'contador-juego',
  imports: [],
  templateUrl: './contador-juego.html',
  styleUrl: './contador-juego.css',
})
export class ContadorJuego {
  @Input() color = `black`
 
  constructor(public game: Game) {}


}
