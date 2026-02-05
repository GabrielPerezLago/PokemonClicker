import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
    @Input() nombre!: string
    @Input() clicks!: number | string
    @Input() tiempo!: string

    @Input() color: string = `white`;


}
