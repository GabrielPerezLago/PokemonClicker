import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Appbutton } from "../appbutton/appbutton";
import { Card } from './card/card';
import { DBController } from '../../global/DBController';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  imports: [Header, Appbutton, Card, CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {
    historial: any[] = []

    constructor(private dbController: DBController){}

    async ngOnInit() {
      this.historial = await this.dbController.findAll()
    }
}
