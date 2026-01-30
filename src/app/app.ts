import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Appbutton } from './components/appbutton/appbutton';

@Component({
  selector: 'app-root',
  imports: [Header, Appbutton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokemon-clicker');
}
