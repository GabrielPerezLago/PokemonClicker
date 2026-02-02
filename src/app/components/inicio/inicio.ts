import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Appbutton } from '../appbutton/appbutton';

@Component({
  selector: 'inicio',
  imports: [Header ,Appbutton],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
