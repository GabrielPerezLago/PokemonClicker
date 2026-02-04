import { Component, Input } from '@angular/core';
import { Header } from '../header/header';
import { Appbutton } from '../appbutton/appbutton';
import { InputApp } from './components/input/input';

@Component({
  selector: 'app-nombre-input',
  imports: [Header, Appbutton, InputApp],
  templateUrl: './nombre-input.html',
  styleUrl: './nombre-input.css',
})
export class NombreInput {

}
